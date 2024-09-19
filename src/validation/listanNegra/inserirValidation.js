

export default function validarInsercao(pessoa) {
    if (!pessoa.nome) throw new Error('Nome é obrigatório');
    if (!pessoa.motivo) throw new Error('Motivo é obrigatório');
    if (!pessoa.vinganca) throw new Error('Vingança é obrigatório');
    if (!pessoa.notaOdio) throw new Error('Nota Ódio é obrigatório');
    if (pessoa.perdoado == undefined) throw new Error('Perdoado é obrigatório');
}

