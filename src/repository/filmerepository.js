import { conta } from "./connection.js";

export async function listFilmin() {
    const command = `
        SELECT * FROM filme
    `;

    const [linhas] = await conta.query(command, []);

    return linhas;
}

export async function saveFilmin(filme) {
    const command = `
        INSERT INTO filme
        (nome, genero, sinopse, avaliacao, lancamento, disponivel)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [resultado] = await conta.query(command, [
        filme.nome,
        filme.genero,
        filme.sinopse,
        filme.avaliacao,
        filme.lancamento,
        filme.disponivel
    ]);

    return resultado.insertId;
}

export async function getFilmin(id) {
    const command = `
        SELECT * FROM filme
        WHERE id = ?
    `;

    const [linhas] = await conta.query(command, [id]);

    return linhas[0];
}

export async function updateFilme(id, filme) {
    const command = `
        UPDATE filme
        SET nome = ?, genero = ?, sinopse = ?, avaliacao = ?, lancamento = ?, disponivel = ?
        WHERE id = ?
    `;

    const [resultado] = await conta.query(command, [
        filme.nome,
        filme.genero,
        filme.sinopse,
        filme.avaliacao,
        filme.lancamento,
        filme.disponivel,
        id
    ]);

    return resultado.affectedRows;
}

export async function deleteFilmin(id) {
    const command = `
        DELETE FROM filme
        WHERE id = ?
    `;

    const [resultado] = await conta.query(command, [id]);

    return resultado.affectedRows;
}