# About
Lafia Service

## Installation
To clone the project:
```bash
https://github.com/parallelscore/lafia-service.git
```
`cd` into the `lafia-service` directory
```bash
cd lafia-service
```

create a `.env` file with actual values similar to the `.env.example` file.

install project dependencies
```
yarn install
```

compile Typescript files to Javascript (by continuously watching)
```bash
yarn tsc -w
```

open another terminal, and run the project
```bash
yarn start:dev
```

## Knex.js Configuration

To make migrations
```bash
knex migrate:make <migration-name> --env <development-environment> -x ts

or

NODE_ENV=<development-environment> knex migrate:make <migration-name> -x ts
```

To run all migrations
```bash
knex migrate:latest --env <development-environment>
```

To create seeds

```bash
knex seed:make <seed-name> --env <development-environment> -x ts
```

To run seeds on database
```bash
knex seed:run --env <development-environment>
`````





