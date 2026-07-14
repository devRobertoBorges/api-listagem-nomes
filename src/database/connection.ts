import mysql from "mysql2/promise";

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT)
});

async function testConnection(){
    try {
        const conn = await connection.getConnection();
        console.log("Conectado");
        conn.release();
    }catch(error) {
        console.error("Erro ao conectar", error)
    };
};

export default testConnection;