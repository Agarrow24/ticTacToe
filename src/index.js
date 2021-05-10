import express from 'express';
import * as controler from './gameController';

const server = express();
server.listen(8080);

server.get("/setPseudo", (req, res) => {
    controler.setPseudo(req.query.pseudo);
});