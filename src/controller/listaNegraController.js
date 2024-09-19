import inserirService from "../service/listaNegra/inserirService.js";
import consultarService from "../service/listaNegra/consultarService.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/listanegra', async (req, resp) => {
    try {
        let pessoa = req.body;

        let id = await inserirService(pessoa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/listanegra', async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;
