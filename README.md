# Citador

Um sistema de gerenciamento de citações

## Membros da equipe

Pedro Henrique Pereira de Oliveira, 494399, Design Digital

## Papéis ou tipos de usuário da aplicação

- Usuário autenticado
- Usuário não autenticado

## Entidades ou tabelas do sistema

- Usuário
- Autor
- Obra
- Citação

## Principais funcionalidades da aplicação

- **Usuário** não autenticado pode _listar_ e ver detalhes **citações**, **obras** e **autores**
- **Usuário autenticado** pode _criar_, _listar_, _atualizar_ e _remover_ e ver detalhes de **citações**, **obras** e **autores**

## Tecnologias e frameworks utilizados

**Frontend:**

- VueJS v3.0, Vue-Router e Pinia
- Axios

**Backend:**

- Strapi

## Operações implementadas para cada entidade da aplicação


| Entidade | Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário |  | |  |  |
| Citação | X | X | X | X |
| Obra | X | X | X | X |
| Autor | X | X | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| POST | /auth/local |
| GET | /users/me/|
| POST | /api/quotes |
| POST | /api/works |
| POST | /api/authors |
| GET | /api/quotes |
| GET | /api/works |
| GET | /api/authors |
| PUT | /api/quotes/{id} |
| PUT | /api/works/{id} |
| PUT | /api/authors/{id} |
| DELETE | /api/quotes/{id} |
| DELETE | /api/works/{id} |
| DELETE | /api/authors/{id} |

## Informações de acesso

- admin@admin.com, Admin123 (Strapi também)
