# 📚 API Listagem de Nomes

<<<<<<< HEAD
API REST desenvolvida para realizar o cadastro, consulta, atualização e remoção de nomes.

Projeto desenvolvido com foco em estudos de **Node.js, Express e TypeScript**, aplicando organização em camadas.
=======
API REST desenvolvida para realizar o gerenciamento de nomes, permitindo cadastrar, listar, atualizar e remover registros.

Este projeto foi desenvolvido com o objetivo de praticar criação de APIs utilizando **Node.js, Express e TypeScript e MySQL(Fase de Implementação)**, aplicando organização em camadas e boas práticas de desenvolvimento.
>>>>>>> 4497d7db18376dd23b19aa0f0fe444d105505532

---

## 🚀 Tecnologias utilizadas

<<<<<<< HEAD
- Node.js
- Express
- TypeScript
- MySQL
- Git e GitHub
=======
* Node.js
* Express
* TypeScript
* MySQL
* mysql2
* Git e GitHub
>>>>>>> 4497d7db18376dd23b19aa0f0fe444d105505532

---

## 📂 Estrutura do projeto
<<<<<<< HEAD
=======

```
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
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### Acesse a pasta do projeto

```bash
cd nome-do-projeto
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

```
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
  "id": 2,
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

```
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

```
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

```
DELETE /nomes/1
```

---

# 🧠 Conceitos aplicados

* Desenvolvimento de API REST
* CRUD completo
* Arquitetura em camadas
* Separação de responsabilidades
* Controllers
* Services
* Repositories
* TypeScript
* Variáveis de ambiente
* Versionamento com Git

---

# 📌 Melhorias futuras

* [ ] Implementar o MySQL
* [ ] Implementar autenticação de usuários
* [ ] Criar validações mais completas
* [ ] Criar testes automatizados
* [ ] Documentar API com Swagger
* [ ] Deploy da aplicação

---

## 👨‍💻 Autor

**Seu nome**

GitHub:
https://github.com/devRobertoBorges
>>>>>>> 4497d7db18376dd23b19aa0f0fe444d105505532
