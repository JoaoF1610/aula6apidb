import { listarPorNome } from "../../repository/listaNegraRepository.js";

export default async function consultarPorNomeService(nome) {
    let registros = await listarPorNome(nome);
    return registros;
}