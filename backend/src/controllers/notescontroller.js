import Note from "../model/Note.js"

export async function getAllNotes(_,res){
     try{
          const notes= await Note.find().sort({createAt:-1});//newest sort in desc order
          res.status(200).json(notes);
     }
     catch{
          console.error("Error in getAllnotes controller",error);
          res.status(500).json({message:"Internal server error"});
     }  
 }

export async function createNote(req,res){    
     try{
          const {title,content}=req.body;
          const note = new Note ({title, content});
         
          const savedNote = await note.save();
          res.status(201).json(savedNote);
     }
     catch{
          consol.error("Error in createNote controller",error);
          res.status(500).json({message:"Internal server error",});
     }
}

export async function getNoteByid(req,res){
     try{
          const note = await Note.findById(req.params.id);
          if(!note) return res.status(404).json({message: "Note not found"});
          res.json(note);
     }
     catch (error){
          console.error("Error in getNoteByid controller",error);
          res.status(500).json({message:"Internal server error"});
     }
}


export async function updateNote(req,res){    
     try{
          const {title,content}=req.body;
          const updatedNote = await Note.findByIdAndUpdate(
               req.params.id,
               {title,content},
               {
               new : true,
               }
          )
          
          if(!updatedNote) return res.send(404).json({message:"Note not found"})

          res.status(200).json(updatedNote);
     }
     catch{
          console.error("Error in updateNote controller",error);
          res.status(500).json({message:"Internal server error",});
     }
}

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
