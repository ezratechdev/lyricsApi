import express from "express";
import http from "http";
import Lyrics from "./routes/lyrics";

// constants
const app = express();
const Server= http.createServer(app);
const PORT = process.env.PORT || 4500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use('/lyrics' , Lyrics);

// 404
app.use((req , res) =>{
    res.send(`Error 404.Content not found`);
})

// 
Server.listen(PORT , () => console.log(`Server running on port ${PORT}`));