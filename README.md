# Blog Backend

A headless CMS backend for a personal blog, built with Strapi v3 and MongoDB. Exposes a GraphQL API with content types for articles and categories, complete with JWT-based user permissions.

## Features

- GraphQL API (articles, categories, users)
- JWT authentication and role-based permissions
- Content management via Strapi admin panel
- MongoDB as the database connector

## Tech Stack

![Strapi](https://img.shields.io/badge/Strapi_3-2F2E8B?style=flat&logo=strapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white)

## Getting Started

### Prerequisites

- Node.js >= 10
- MongoDB instance

### Installation

```bash
npm install
```

### Environment variables

Configure your database in `config/database.js`:

```env
DATABASE_URI=mongodb://localhost/blog
```

### Run locally

```bash
npm run develop
# Admin panel at http://localhost:1337/admin
# GraphQL playground at http://localhost:1337/graphql
```

### Build for production

```bash
npm run build
npm start
```

## Content Types

| Type | Fields |
|------|--------|
| Article | title, content, image, category, author |
| Category | name, articles |

## Project Structure

```
├── api/
│   ├── article/        # Article content type
│   └── category/       # Category content type
├── config/
│   ├── database.js     # DB configuration
│   └── server.js       # Server configuration
└── extensions/
    └── users-permissions/  # Custom auth config
```

## Preview

![Preview](./assets/preview.png)
