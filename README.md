# 📚 API Listagem de Nomes

API REST desenvolvida para realizar o gerenciamento de nomes, permitindo cadastrar, listar, atualizar e remover registros.

Projeto desenvolvido com foco em estudos de **Node.js, Express, TypeScript e MySQL**, aplicando organização em camadas e boas práticas de desenvolvimento.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- mysql2
- Git e GitHub

---

## 📂 Estrutura do projeto

```text
src/
│
├── controllers/     # Responsável por receber requisições e enviar respostas
├── services/        # Contém as regras de negócio da aplicação
├── repositories/    # Responsável pela comunicação com o banco de dados
├── models/          # Tipagem e estrutura dos dados
├── utils/           # Funções auxiliares
│
├── app.ts           # Configuração da aplicação Express
├── routes.ts        # Definição das rotas da API
└── server.ts        # Inicialização do servidor
```

---

## ⚙️ Como executar o projeto

### Clone o repositório

```bash
git clone https://github.com/devRobertoBorges/api-listagem-nomes.git
```

### Acesse a pasta do projeto

```bash
cd api-listagem-nomes
```

### Instale as dependências

```bash
npm install
```

### Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

### Execute o projeto

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3333
```

---

# 📌 Endpoints da API

## 📄 Listar todos os nomes

### GET `/nomes`

Retorna todos os nomes cadastrados.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Roberto"
  }
]
```

---

## ➕ Criar um nome

### POST `/nomes`

Cria um novo registro.

Exemplo de requisição:

```json
{
  "nome": "Carlos"
}
```

Exemplo de resposta:

```json
{
  "message": "successful"
}
```

---

## 🔎 Buscar nome por ID

### GET `/nomes/:id`

Busca um nome específico pelo identificador.

Exemplo:

```text
GET /nomes/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Roberto"
}
```

---

## ✏️ Atualizar nome

### PUT `/nomes/:id`

Atualiza um registro existente.

Exemplo:

```text
PUT /nomes/1
```

Body:

```json
{
  "nome": "Roberto Silva"
}
```

---

## 🗑️ Deletar nome

### DELETE `/nomes/:id`

Remove um registro pelo ID.

Exemplo:

```text
DELETE /nomes/1
```

---

# 🧠 Conceitos aplicados

- Desenvolvimento de API REST
- CRUD completo
- Arquitetura em camadas
- Separação de responsabilidades
- Controllers
- Services
- Repositories
- TypeScript
- Variáveis de ambiente
- Versionamento com Git

---

# 📌 Melhorias futuras

- [ ] Implementar conexão completa com MySQL
- [ ] Implementar autenticação de usuários
- [ ] Criar validações mais completas
- [ ] Criar testes automatizados
- [ ] Documentar API com Swagger
- [ ] Deploy da aplicação

---

## 👨‍💻 Autor

**Roberto Borges**

GitHub:  
https://github.com/devRobertoBorges
