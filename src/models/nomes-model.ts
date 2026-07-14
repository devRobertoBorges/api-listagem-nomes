import { RowDataPacket } from "mysql2"

//CRIA UM CONTRATO QUE DEFINE COMO SERÁ O BANCO DE DADOS
export interface tipagemNomes{
    id:number,
    nome: string
};

export interface tipagemNomesSql extends RowDataPacket{
    id:number,
    nome: string
};