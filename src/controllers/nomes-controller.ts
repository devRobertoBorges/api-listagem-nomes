//IMPORTA O REQ E RES DO EXPRESS
import { Request, Response } from "express";

//IMPORTA AS FUNCOES DO SERVICE 
import * as service from "../services/nomes-services";

//FUNCAO DE PEGAR TODOS OS NOMES, RECEBE OS DADOS PROCESSADOS DO SERVICE, E RETORNA O DADO E STATUS PARA A ROTA
export const getNomes = async (req: Request, res: Response) => {
    //ARMAZENA A RESPOSTA PROCESSADA DO SERVICE
    const httpResponse = await service.getNomesService();

    //RETORNA O STATUS DO HTTP RESPONSE E O JSON DOS DADOS
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

//FUNCAO QUE PEGA UM NOME PELO ID, RECEBE OS DADOS PROCESSADOS DO SERVICE E RETORNA O DADO E STATUS PARA A ROTA
export const getNomesById = async (req: Request, res: Response) => {
    //RECEBE O PARAMETRO DA ROTA E ARMAZENA COMO O ID
    const id = Number(req.params.id);

    //ARMAZENA A RESPOSTA PROCESSADA PELO SERVICE ATRAVES DO ID ATRIBUIDO
    const httpResponse = await service.getNomeServiceById(id);

    //RETORNA A RESPOSTA COM O STATUS CODE E O JSON DOS DADOS
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

//FUNCAO QUE RECEBE OS DADOS PROCESSADOS DO SERVICE E ENVIA PARA OS DADOS PARA A ROTA
export const createNome = async (req: Request, res: Response) => {
    
    //PEGA A REQUISICAO DO QUE VIER DO BODY
    const bodyValue = req.body;

    //MANDA A REQUISICAO DO BODY PARA A FUNCAO DO SERVICE
    const httpResponse = await service.createNomeService(bodyValue);

    //FAZ A VERIFICACAO SE TEM ALGO QUE CHEGOU NO RESPONSE
    if (httpResponse) {

        //RETORNA A RESPOSTA COM O STATUS CODE E O JSON DOS DADOS
        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};

//FUNCAO QUE REBEBE OS DADOS DO SERVICE E ENVIA PARA A ROTA
export const updateNome = async(req: Request, res: Response) => {

    //ARMAZENA O REQ DO ID 
    const id = Number(req.params.id);

    //RECEBE A REQUISICAO DO BODY
    const bodyValue = req.body;

    //MANDA O ID RECEBIDO DO REQ E O NOME DO BODY RECEBIDO PARA FUNCAO DO SERVICE
    const httpResponse = await service.updateNomeService(id, bodyValue.nome);

    //RETORNA A RESPOSTA COM O STATUS CODE E O JSON DOS DADOS
    res.status(httpResponse.statusCode).json(httpResponse.body);
    
};


//RECEBE A FUNCAO PROCESSADA DO SERVICE E MANDA PARA A ROTA A RES
export const deleteNome = async (req: Request, res: Response) => {

    //ARMAZENA O ID REQUISITADO NA ROTA(/nomes/:id)
    const id = Number(req.params.id);
    
    //ARMAZENA A RESPOSTA VINDA DO SERVICE (NO CASO TRUE OU FALSE)
    const httpResponse = await service.deleteNomeService(id);

    //MANDA O STATUS CODE E A DATA RECEBIDO PARA A ROTA
    res.status(httpResponse.statusCode).json(httpResponse.body);
    
};