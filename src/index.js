import express from 'express';
import * as controler from './gameController';

const server = express();
server.listen(8080);

server.get("/setPseudo", (req, res) => {
    controler.setPseudo(req.query.pseudo);
    // console.log(req.query.pseudo);
});

server.get("/setNumPartie", (req, res) => {
    controler.setNumPartie(req.query.numPartie);
    // console.log(req.query.pseudo);
});