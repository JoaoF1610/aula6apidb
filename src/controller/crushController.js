import inserirService from "../service/crush/inserirService.js";
import consultarService from "../service/crush/consultarService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('crush', async (req, resp) => {

    try {
        let pessoa = req.body;

        let id = await inserirService(pessoa);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.get('crush', async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros);
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
