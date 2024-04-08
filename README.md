# Node Checkin Project Documentation

## Overview

**Node Checkin** is an application designed to manage participants in in-person events using a Node.js framework. The tool allows the organizer to register an event, open a public registration page, and provides a set of RESTful API endpoints built with Fastify, TypeScript, and Prisma. Registered participants can generate a credential for check-in on the day of the event. The system then scans the participant's credential to allow entry to the event. This documentation provides an overview of the project structure, available scripts, API endpoints, and dependencies.

### Diagrama ERD

<img src=".github/erd.svg" width="600" alt="Diagrama ERD do banco de dados" />

## Project Structure

- `.husky/`: Husky Hooks directory
- `prisma/`: Prisma configuration and migration directory
  - `schema.prisma`: Prisma schema file
- `src/`: Source code directory
  - `server.ts`: Main server file
  - `lib/`: Directory for lib configuration
    - `prisma.ts`: Prisma Client configuration file
  - `routes/`: Directory for API routes
    - `check-in.ts`: Check-in related routes
    - `create-event.ts`: Event creation related routes
    - `get-attendees-badge.ts`: Get attendee badge related routes
    - `get-event-attendees.ts`: Get event attendees related routes
    - `get-event.ts`: Get event details related routes
    - `register-for-event.ts`: Register for event related routes
  - `utils/`: Utility functions directory
    - `generate-slug.ts`: Generate slug utility
- `.env`: Environment configuration file
- `docker-compose.yml`: Docker Compose configuration file
- `eslintrc.json`: ESLint configuration file
- `prettierrc.json`: Prettier configuration file
- `tsconfig.json`: TypeScript configuration file

## Scripts

### Starting the Server

```bash
pnpm start
```
Runs the server using `tsx src/server.ts`.

### Building the Project

```bash
pnpm run build
```
Builds the project using `tsup src`.

### Linting

```bash
pnpm run lint
```
Lints the code using ESLint.

### Starting the Server in Development Mode

```bash
pnpm run start:dev
```
Watches for changes and restarts the server using `tsx watch --env-file .env src/server.ts`.

### Pre-commit Hook

Before each commit, the following actions are executed:

- Code linting
- Code formatting using Prettier
- Running lint tests

### Testing

```bash
pnpm test
```
Runs the tests using `vitest`.

```bash
pnpm run test:lint
```
Runs lint tests.

### Docker

```bash
docker-compose up
```
Starts the Docker containers defined in `docker-compose.yml`.

### Prisma Migration

```bash
pnpm prisma:apply
```
Applies the Prisma migrations.

## API Endpoints

| HTTP Method | Endpoint                               | Description                        |
|-------------|----------------------------------------|------------------------------------|
| POST        | `/events`                              | Create an event                    |
| GET         | `/events/{eventId}/attendees`          | Get event attendees                |
| GET         | `/events/{eventId}`                    | Get an event                       |
| POST        | `/events/{eventId}/attendees`          | Register an attendee               |
| GET         | `/attendees/{attendeeId}/badge`        | Get an attendee badge              |
| GET         | `/attendees/{attendeeId}/check-in`     | Check-in an attendee               |

## Dependencies

- **Fastify**: Web framework
- **@fastify/cors**: CORS plugin for Fastify
- **@fastify/swagger**: Swagger documentation plugin for Fastify
- **@fastify/swagger-ui**: Swagger UI plugin for Fastify
- **@prisma/client**: Prisma client for database operations
- **fastify-type-provider-zod**: Type validation plugin for Fastify using Zod
- **prisma**: Database ORM
- **zod**: Schema validation library

## Development Dependencies

- **@eslint/js**: ESLint for linting
- **@types/node**: TypeScript types for Node.js
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript
- **@typescript-eslint/parser**: ESLint parser for TypeScript
- **eslint**: Linting utility
- **eslint-config-prettier**: ESLint configuration for Prettier
- **globals**: Global type definitions
- **husky**: Git hooks management
- **lint-staged**: Run linters against staged git files
- **prettier**: Code formatting utility
- **tsup**: TypeScript bundler
- **tsx**: TypeScript transpiler
- **typescript**: TypeScript compiler
- **vitest**: Testing framework

## Acknowledgment

This project was built during a workshop from Rockeseat NLW Unite. We would like to express our gratitude for the valuable learning experience and guidance provided.

## License

MIT