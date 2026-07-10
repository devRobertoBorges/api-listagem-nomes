//CRIA UM CONTRATO ONDE A RESPOSTA DO HTTP TEM QUE SER DESSA FORMA, COM UM STATUS CODE E UM BODY
interface httpResponse {
    statusCode: number;
    body: any
};

//EXPORTA A RESPOSTA OK E RETORNA PARA O SERVICE CONTENDO UM STATUS CODE O BODY
export const ok = async (data:any): Promise <httpResponse> => {
    return{
        statusCode:200,
        body: data,
    };
};

//CASO NÃO TENHA O ID PROCURADO, RETORNA O STATUS CODE E O BODY CONTENDO UMA MENSAGEM
export const notFound = async (): Promise <httpResponse> => {
    return{
        statusCode: 404,
        body: 
            {
                message: "id not found"
            }
    };
};

//EXPORTA A RESPOSTA CREATED E RETORNA PARA O SERVICE O STATUS CODE E A MENSAGEM
export const created = async (): Promise<httpResponse> => {
    return {
        statusCode:201,
        body: {
            message: "successful"
        }
    };
};

//EXPORTA A RESPOSTA BAD REQUEST COM UMA MENSAGEM INFORMADA NA SERVICE
export const badRequest = async(message: string): Promise<httpResponse> => {
    return {
        statusCode:201,
        body: {
            message
        }
    };
};

