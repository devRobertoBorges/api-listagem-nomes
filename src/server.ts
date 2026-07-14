import createApp from "./app";
import testConnection from "./database/connection";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
});

testConnection();

