# 📚 API Listagem de Nomes - Full Stack

Aplicação Full Stack desenvolvida para realizar o gerenciamento de nomes, permitindo cadastrar, listar, atualizar e remover registros.

O projeto foi desenvolvido com foco em estudos e prática de desenvolvimento web utilizando **Node.js, Express, TypeScript, MySQL e React**, aplicando organização em camadas, separação de responsabilidades e boas práticas de desenvolvimento.

---

# 🚀 Tecnologias utilizadas

## Backend

- Node.js
- Express
- TypeScript
- MySQL
- mysql2
- CORS
- dotenv
- Git e GitHub

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Lucide React
- Componentização

---

# 📂 Estrutura do projeto

```text
api-listagem-nomes/

│
├── backend/
│
│   ├── src/
│   │
│   ├── controllers/
│   │       # Responsável por receber requisições e retornar respostas
│   │
│   ├── services/
│   │       # Contém regras de negócio
│   │
│   ├── repositories/
│   │       # Comunicação com o banco de dados
│   │
│   ├── models/
│   │       # Tipagem e modelos da aplicação
│   │
│   ├── utils/
│   │       # Funções auxiliares
│   │
│   ├── app.ts
│   │       # Configuração do Express
│   │
│   ├── routes.ts
│   │       # Rotas da aplicação
│   │
│   └── server.ts
│           # Inicialização do servidor
│
│
├── frontend/
│
│   ├── src/
│   │
│   ├── components/
│   │       # Componentes reutilizáveis
│   │
│   ├── pages/
│   │       # Páginas da aplicação
│   │
│   ├── services/
│   │       # Comunicação com a API
│   │
│   ├── types/
│   │       # Tipagens TypeScript
│   │
│   └── main.tsx
│
└── README.md
```

---

# ⚙️ Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/devRobertoBorges/api-listagem-nomes.git
```

---

# 🔙 Executando o Backend

Acesse a pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
PORT=3333

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_DATABASE=api_listagem_nomes
```

Execute:

```bash
npm run dev
```

API disponível em:

```text
http://localhost:3333
```

---

# 🎨 Executando o Frontend

Em outro terminal:

Acesse:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

---

# 📌 Funcionalidades

## ✅ Listagem de nomes

Permite visualizar todos os registros cadastrados através da API.

---

## ✅ Criar nomes

Permite adicionar novos registros no banco de dados.

---

## ✅ Atualização de nomes

Possui edição diretamente no card do nome:

- Clique no botão editar;
- Campo de texto aparece;
- Pressione ENTER para salvar;
- Clique fora para cancelar;
- Atualização realizada via API.

---

## ✅ Exclusão de nomes

Possui confirmação antes da exclusão:

- Usuário seleciona o registro;
- Sistema solicita confirmação;
- Registro é removido através da API.

---

# 📌 Endpoints da API

## Listar nomes

```
GET /nome
```

Resposta:

```json
[
  {
    "id": 1,
    "nome": "Roberto"
  }
]
```

---

## Criar nome

```
POST /nome
```

Body:

```json
{
  "nome": "Carlos"
}
```

---

## Buscar nome por ID

```
GET /nome/:id
```

Exemplo:

```
GET /nome/1
```

---

## Atualizar nome

```
PATCH /nome/:id
```

Body:

```json
{
  "nome": "Roberto Silva"
}
```

---

## Deletar nome

```
DELETE /nome/:id
```

Exemplo:

```
DELETE /nome/1
```

---

# 🧠 Conceitos aplicados

- API REST
- CRUD completo
- Arquitetura em camadas
- Separação de responsabilidades
- Controllers
- Services
- Repositories
- React Components
- Comunicação entre Frontend e Backend
- TypeScript
- Hooks do React
- Axios
- MySQL
- Variáveis de ambiente
- Git e GitHub

---

# 🔮 Melhorias futuras

- [x] Implementar conexão com MySQL
- [x] Criar Frontend React
- [x] Implementar CRUD completo
- [x] Criar edição inline
- [x] Criar confirmação de exclusão
- [x] Criar feedback visual de ações
- [ ] Implementar cadastro de usuários
- [ ] Criar autenticação JWT
- [ ] Criar validações avançadas
- [ ] Criar testes automatizados
- [ ] Implementar ORM (TypeORM/Prisma)
- [ ] Deploy da aplicação
- [ ] Criar documentação Swagger

---

# 👨‍💻 Autor

**Roberto Borges**

GitHub:

https://github.com/devRobertoBorges