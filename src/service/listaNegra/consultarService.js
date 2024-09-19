import { listar } from "../../repository/listaNegraRepository.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}

