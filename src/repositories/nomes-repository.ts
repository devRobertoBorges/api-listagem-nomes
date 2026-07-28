//IMPORTA O CONTRATO DO MODELS
import { tipagemNomes, tipagemNomesSql } from "../models/nomes-model";

import { ResultSetHeader } from "mysql2";

//IMPORTA A CONEXAO COM MYSQL
import  { connection }  from "../database/connection";

//EXPORTA A FUNCAO QUE LISTA O TODOS OS NOMES DO SQL
export const findAllNomesSql = async () => {
    const [rows] = await connection.query<tipagemNomesSql[]>(
        "SELECT * FROM nomes"
    );

    return rows;
};

//EXPORTA A FUNCAO QUE ACHA UM NOME PELO ID, ONDE RETORNA UMA PROMESSA QUE SEJA IGUAL O CONTRATO OU NADA
export const findNomesByIdSql = async (id: number): Promise <tipagemNomes | undefined> => {
    const [rows] = await connection.query<tipagemNomesSql[]>(
        "SELECT * FROM nomes WHERE id = ?", [id]
    );

    return rows[0];
};

//EXPORTA A FUNCAO QUE CRIA UM NOME, (RECEBE UM OBJETO DO TIPO TIPAGEMNOMES) E REPASSA PARA O SERVICE
export const createNomeSql = async (nome: tipagemNomes) => {
    const [result] = await connection.query(
        "INSERT INTO nomes (nome) VALUES (?)",
        [nome.nome]
    );
};

//EXPORTA A FUNCAO QUE ATUALIZA UM NOME, (RECE UM ID E UM NOME) E REPASSA UMA PROMISSE NO CONTRATO OU INDEFINIDO
export const findAndModifyNome = async(id:number, nome: string): Promise<boolean> => {
    const [result] = await connection.query<ResultSetHeader>(
        "UPDATE nomes SET nome = ? WHERE id = ?", [nome,id]
    );

    return result.affectedRows > 0;
};


//EXPORTA A FUNCAO QUE DELETA O NOME PELO ID
export const deleteNomeById = async (id:number): Promise<boolean> => {
    const [result] = await connection.query<ResultSetHeader>(
        "DELETE FROM nomes WHERE id = ?", [id]
    );

    return result.affectedRows > 0;
};