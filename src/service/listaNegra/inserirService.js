import { inserir } from '../../repository/listaNegraRepository.js'
import validarInsercao from '../../validation/listanNegra/inserirValidation.js';


export default async function inserirService(pessoa) {
    validarInsercao(pessoa);

    let id = await inserir(pessoa);
    return id;
}

