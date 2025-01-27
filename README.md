# MyDevil Fullstack Template

## Description

Fullstack template for web applications based on [NestJS](https://nestjs.com/), [PostgreSQL](https://postgresql.org/) and [React](https://react.dev/) running on [MyDevil](https://mydevil.net/) hosting. Using the [SWC](https://swc.rs/) compiler was not possible due to lack of support for the FreeBSD operating system and the [Phusion Passenger](https://phusionpassenger.com/) configuration requires to be run from the `app.js` file.

## Project setup

```bash
# copy and edit .env file
$ cp .env.dist .env
```

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

[Marcin Stasiak](https://marcinstasiak.pl)

## License

Template is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
