import con from "./connection.js";

export async function inserir(pessoa) {
    const comando = `
    insert into tb_crush (nm_pessoa, dt_desde, bt_namorando, bt_reciproco, vl_presente) 
    values (?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [pessoa.nome, pessoa.desde, pessoa.namorando, pessoa.reciproco, pessoa.presente]);
    return info.insertId;
}

export async function listar() {
    const comando = `
        select id_crush             id,
               nm_pessoa            nome,
               dt_desde             motivo,
               bt_namorando         namorando,
               bt_reciproco         notaOdio,
               vl_presente          perdoado
          from tb_crush
    `

    let [registros] = await con.query(comando);
    return registros;
}