# Catálogo de Filmes

Aplicação CRUD para gerenciamento de filmes, composta por frontend em React, backend em Node.js/Express e banco de dados PostgreSQL — tudo orquestrado via Docker Compose.

## Tecnologias

- **Frontend:** React 19, Vite, Bootstrap 5, Axios
- **Backend:** Node.js, Express
- **Banco de dados:** PostgreSQL 16
- **Infraestrutura:** Docker, Docker Compose

## Pré-requisitos

- [Docker](https://www.docker.com/) instalado e em execução
- [Docker Compose](https://docs.docker.com/compose/) (já incluso no Docker Desktop)

## Como rodar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd dockerTrojahn
```

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo e ajuste os valores se necessário:

```bash
cp .env.example .env
```

O `.env` padrão já funciona sem alterações:

```env
BACKEND_PORT=3000
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=catalogofilmes
VITE_API_URL=http://localhost:3000
```

### 3. Suba os containers

```bash
docker compose up --build
```

Na primeira execução, o Docker irá:
1. Construir as imagens do frontend e do backend
2. Subir o banco de dados PostgreSQL
3. Executar a migration automaticamente (criação da tabela `filmes`)
4. Iniciar o servidor da API
5. Servir o frontend via Nginx

### 4. Acesse a aplicação

| Serviço  | Endereço                     |
|----------|------------------------------|
| Frontend | http://localhost             |
| API      | http://localhost:3000        |
| Health   | http://localhost:3000/health |

## Endpoints da API

| Método | Rota        | Descrição             |
|--------|-------------|-----------------------|
| GET    | /filmes     | Lista todos os filmes |
| GET    | /filmes/:id | Busca filme por ID    |
| POST   | /filmes     | Cria novo filme       |
| PUT    | /filmes/:id | Atualiza filme por ID |
| DELETE | /filmes/:id | Remove filme por ID   |

### Exemplo de payload (POST/PUT)

```json
{
  "nome": "O Poderoso Chefão",
  "genero": "Drama",
  "ano": 1972
}
```

## Parar a aplicação

```bash
docker compose down
```

Para remover também o volume do banco de dados:

```bash
docker compose down -v
```
