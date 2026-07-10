//IMPORTA O CONTRATO DO MODELS
import { tipagemNomes } from "../models/nomes-model";


//ARMAZENA O BANCO DE DADOS COM O CONTRATO, EXIGINDO QUE OBRIGATORIAMENTE TENHA ID, NOME
export const databaseNomes: tipagemNomes[] = [
    {
        id: 1,
        nome: "João"
    },
    {
        id: 2,
        nome: "Maria"
    },
    {
        id: 3,
        nome: "Pedro"
    },
    {
        id: 4,
        nome: "Ana"
    },
    {
        id: 5,
        nome: "Carlos"
    },
    {
        id: 6,
        nome: "Fernanda"
    },
    {
        id: 7,
        nome: "Lucas"
    },
    {
        id: 8,
        nome: "Juliana"
    },
    {
        id: 9,
        nome: "Gabriel"
    },
    {
        id: 10,
        nome: "Beatriz"
    }
];

//EXPORTA A FUNCAO QUE ACESSA TODO O BANCO DE DADOS
export const findAllNomes = async () => {
    return databaseNomes;
};

//EXPORTA A FUNCAO QUE ACHA UM NOME PELO ID, ONDE RETORNA UMA PROMESSA QUE SEJA IGUAL O CONTRATO OU NADA
export const findNomesById = async (id: number): Promise <tipagemNomes | undefined> => {
    return databaseNomes.find( nome => nome.id === id);
};

//EXPORTA A FUNCAO QUE CRIA UM NOME, (RECEBE UM OBJETO DO TIPO TIPAGEMNOMES) E REPASSA PARA O SERVICE
export const createNome = async (nome: tipagemNomes) => {
    //FUNCAO QUE USA O PUSH PARA IMPLEMENTAR NA LISTA
    databaseNomes.push(nome);
};

//EXPORTA A FUNCAO QUE ATUALIZA UM NOME, (RECE UM ID E UM NOME) E REPASSA UMA PROMISSE NO CONTRATO OU INDEFINIDO
export const findAndModifyNome = async(id:number, nome: string): Promise<tipagemNomes | undefined> => {
     
    //PERCORRE O ARRAY E O PUXA O NOME PELO ID INFORMADO
    const nomeIndex = databaseNomes.findIndex (nome => nome.id === id);

    //VERIFICA SE FOI ACHADO ALGO COM O ID INFORMADO
    if (nomeIndex === -1){

        //RETORNA INDEFINIDO QUANDO NÃO ACHA
        return undefined;
        
        //SE NAO
    }else{

        //PEGA O NOME INFORMADO NA FUNCAO E SUBSTITUI O NOME INFORMADO
        databaseNomes[nomeIndex].nome = nome;
    };

    //RETORNA O ITEM QUE FOI SUBSTITUIDO
    return databaseNomes[nomeIndex];
};


//EXPORTA A FUNCAO QUE DELETA O NOME PELO ID
export const deleteNomeById = async (id:number) => {

    //ARMAZENA O INDEX PERCORRENDO O ARRAY, SE O ARRAY INFORMADO NA FUNCAO FOR IGUAL O ID DO ARRAY
    const index = databaseNomes.findIndex (n => n.id === id);


    //SE NAO ACHAR RETORNA FALSE
    if (index === -1){
        return false;

    //SE NAO APAGA O NOME E RETORNA TRUE
    }else {
        databaseNomes.splice(index, 1);

        return true;
    };
};