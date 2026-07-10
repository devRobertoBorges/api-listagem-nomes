
// IMPORTA AS FUNCOES DO REPOSITORIO
import * as databaseNomes from "../repositories/nomes-repository";

//IMPORTA AS RESPOSTA DO HELPER
import * as httpResponse from "../utils/http-helper";

//IMPORTA O CONTRATO DO MODELS
import { tipagemNomes } from "../models/nomes-model";

//PEGA DO REPOSITORIO A FUNCAO DE LISTAR TODOS OS NOMES E TRANSFORMA EM UM REPONSE DO HTTP
export const getNomesService = async () => {
    //RECEBE OS DADOS DO REPOSITORIO
    const dataNomes = await databaseNomes.findAllNomes();

    //ARMAZENA A REPOSTA COM O CONTRATO DO HTTP
    let response = null;
    if (dataNomes){
        response = await httpResponse.ok(dataNomes);
    }else {
        response = {
            statusCode: 404,
            body: null,
            message: "not found"
        }
    };
    
    //RETORNA O CONTRATO PARA O CONTROLLER
    return response;
};

//PEGA DO REPOSITORIO A FUNCAO DE ACHAR UM NOME PELO ID, E RECEBE UM ID PARA PUXAR O NOME
export const getNomeServiceById = async (id: number) => {

    //ARMAZENA A FUNCAO DE PUXAR PELO ID, PASSA O ID RECEBIDO, ARMAZENA O QUE FOI ACHADO
    const data = await databaseNomes.findNomesById(id);

    //VARIAVEL NULA DA REPOSTA
    let response = null;

    //VERIFICACAO SE EXISTE ALGO RECEBIDO PELA FUNCAO DO REPOSITORIO
    if (data){
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.notFound();
    };

    //RETORNA O CONTRATO PARA O CONTROLLER
    return response;
};

//PEGA A FUNCAO DO REPOSITORIO DE CRIAR NOMES, E RECEBE UM OBJETO DO TIPO TIPAGEM NOMES 
export const createNomeService = async (nome: tipagemNomes) => {
    //CRIA UMA VARIAVEL QUE GUARDARA A RESPOSTA
    let response = null;

    //VERIFICA SE O OBJETO É VAZIO OU OS TIPOS ESTÃO ERRADOS
    if(typeof nome.id === "number" && typeof nome.nome === "string" && nome.nome.trim() !== ""){

        //CHAMA A FUNCAO DO REPOSITORIO E PASSA O OBJETO RECEBIDO
        await databaseNomes.createNome(nome);

        //SE NAO TIVER VAZIO GUARDA A RESPOSTA DE OK NA VARIAVEL
        response = await httpResponse.created();
    }else {

        //SE NAO, GUARDA A REPOSTA NA VARIAVEL
        response = await httpResponse.badRequest('O objeto deve conter um id (number) e um nome (string).');
    };
    
    //RETORNA A VARIAVEL RESPONSE
    return response;
};

//PEGA A FUNCAO DE ATUALIZAR O NOME DO REPOSITORIO, E RECEBE UM ID E UM NOME
export const updateNomeService = async (id:number, nome:string) => {

    //ARMAZENA O QUE CHEGA DA FUNCAO DO REPOSITORIO
    const data = await databaseNomes.findAndModifyNome(id, nome);

    //VERIFICA SE CHEGOU DADO NA VARIAVEL
    if (!data){

        //RETORNA O STATUS CODE DE ERRO
        return await httpResponse.badRequest('Informe um nome');
    };

    //RETORNA O STATUS CODE DE SUCESSO
    return await httpResponse.ok(data);
}; 

//PEGA A FUNCAO DE DELETAR DO REPOSITORIO
export const deleteNomeService = async (id:number) => {

    //PUXA O RETORNO DA FUNCAO NO REPOSITORIO E ARMAZENA COMO BOOLEAN
    const deleted = await databaseNomes.deleteNomeById(id);

    //SE FOR FALSE
    if(!deleted) {

        //RETORNA O BAD REQUEST DO HTTP HELPER
        return await httpResponse.badRequest('id not found');

        //SE NAO
    }else {

        //RETORNA O OK DO HTTP HELPER
        return await httpResponse.ok({message: 'deleted'});
    };
};  