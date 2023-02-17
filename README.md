# Vivo

An API developed for the Software Engineer job at Vivo.

This project has as main libraries Node.js, Express.js, Typescript and Prisma (PostgresSQL). Seeks to apply SOLID concepts, clean code, repository-pattern, etc.

## Prerequisites

- node >= 18.13.0
- yarn >= 1.22.19
- docker-compose >= 2.15.1

## Installation

1. Install all packages

```bash
yarn install
```

2. Execute docker-compose

```bash
docker-compose up -d
```

3. Execute migrations

```bash
yarn prisma migrate dev --name init
```

## Usage

```bash
yarn start:dev
```

## Tests

```bash
yarn test
```
