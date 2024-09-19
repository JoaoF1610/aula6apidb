import con from "./connection.js";


export async function inserir(pessoa) {
    const comando = `
        insert into tb_lista_negra (nm_pessoa, ds_motivo, dt_vinganca, nr_nota_odio, bt_perdoado) 
					        values (?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [pessoa.nome, pessoa.motivo, pessoa.vinganca, pessoa.notaOdio, pessoa.perdoado]);
    return info.insertId;
}




export async function listar() {
    const comando = `
        select id_lista_negra       id,
               nm_pessoa            nome,
               ds_motivo            motivo,
               dt_vinganca          vinganca,
               nr_nota_odio         notaOdio,
               bt_perdoado          perdoado
          from tb_lista_negra
    `

    let [registros] = await con.query(comando);
    return registros;
}


