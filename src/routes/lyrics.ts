import express, { Router } from "express";
import lyrics from "@jeve/lyrics-finder";

const Lyrics = Router();


Lyrics.get('/:name/:artist' , async (req , res) =>{
    if(!req.params.name) throw new Error(`Song name not passed`);
    const { name , artist } = req.params;
    await lyrics.LyricsFinder(`${name} - ${artist}`)
    .then(data =>{
        res.send(data);
    })
    .catch(error => {
        res.send(`Unable to find lyrics`);
    })
});

export default Lyrics;