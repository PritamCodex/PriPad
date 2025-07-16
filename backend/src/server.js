import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import rateLimiter from "./middleware/rateLimiter.js"


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env from /src/
dotenv.config({ path: path.join(__dirname, "./.env") });

const app = express();
const PORT=process.env.PORT||5001


//Middleware
app.use(cors({
  origin:"http://localhost:5173",
  
}));
app.use(express.json());
app.use(rateLimiter)


//middleware ---- used for Auth check
// app.use((req,res,next) =>{
//   console.log(`Req method is ${req.method} and Req URL is ${req.url}`); // middleware to parse req body
//   next();
// })

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log("Server started on PORT:",PORT);
});
});


