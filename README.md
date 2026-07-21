# 📚 API Listagem de Nomes - Full Stack

Aplicação Full Stack desenvolvida para gerenciamento de nomes, permitindo cadastrar, listar, atualizar e remover registros.

O projeto foi desenvolvido com foco em estudo e prática de desenvolvimento web utilizando **Node.js, Express, TypeScript, MySQL e React**, aplicando organização em camadas, separação de responsabilidades e boas práticas de desenvolvimento.

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
- Hooks do React

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
│   │       # Responsável pelo controle das requisições HTTP
│   │
│   ├── services/
│   │       # Contém regras de negócio da aplicação
│   │
│   ├── repositories/
│   │       # Responsável pela comunicação com o banco MySQL
│   │
│   ├── models/
│   │       # Tipagens e modelos da aplicação
│   │
│   ├── utils/
│   │       # Funções auxiliares
│   │
│   ├── app.ts
│   │       # Configuração do Express
│   │
│   ├── routes.ts
│   │       # Definição das rotas
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
│   ├── services/
│   │       # Comunicação com a API
│   │
│   ├── types/
│   │       # Tipagens TypeScript
│   │
│   ├── App.tsx
│   │       # Estrutura principal da aplicação
│   │
│   └── main.tsx
│           # Inicialização do React
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

# 🔙 Backend

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

Execute o servidor:

```bash
npm run dev
```

API disponível:

```text
http://localhost:3333
```

---

# 🎨 Frontend

Em outro terminal:

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

Aplicação disponível:

```text
http://localhost:5173
```

---

# 📌 Funcionalidades

## ✅ Listagem de nomes

Exibe todos os registros cadastrados no banco de dados através da API.

---

## ✅ Cadastro de nomes

O cadastro foi integrado à tela de gerenciamento.

O usuário consegue adicionar novos nomes diretamente no painel de listagem, sem necessidade de abrir uma nova página.

---

## ✅ Atualização de nomes

Possui edição diretamente no card do registro.

Fluxo:

- Usuário seleciona editar;
- Campo de edição aparece no próprio card;
- Pressiona ENTER para salvar;
- Clique fora cancela a edição;
- Alteração é enviada para API.

---

## ✅ Exclusão de nomes

Possui confirmação antes da remoção.

Fluxo:

- Usuário seleciona excluir;
- Sistema solicita confirmação;
- Registro é removido do banco através da API.

---

## ✅ Feedback visual

A aplicação possui mensagens de confirmação após ações realizadas, melhorando a experiência do usuário.

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
- Comunicação Frontend e Backend
- TypeScript
- Hooks
- Axios
- MySQL
- Variáveis de ambiente
- Git e GitHub
- Interface responsiva com Tailwind CSS

---

# 🔮 Melhorias futuras

- [x] Implementar conexão com MySQL
- [x] Criar Backend com Express e TypeScript
- [x] Criar Frontend React
- [x] Implementar CRUD completo
- [x] Criar edição inline
- [x] Criar confirmação de exclusão
- [x] Criar feedback visual de ações
- [x] Criar interface utilizando Tailwind CSS

Próximas melhorias:

- [ ] Implementar cadastro de usuários
- [ ] Criar autenticação JWT
- [ ] Criar validações avançadas
- [ ] Criar testes automatizados
- [ ] Implementar ORM (Prisma/TypeORM)
- [ ] Criar documentação Swagger
- [ ] Deploy da aplicação

---

# 👨‍💻 Autor

**Roberto Borges**

GitHub:

https://github.com/devRobertoBorges