# Policy Checkout App

##### Demo Link For The Project

https://policy-checkout-app.vercel.app/

#

## Introduction

> A React application that allows users to select a policy package with a coverage amount and payment schedule as they want.

> Analytics tracking is done via GoogleTagManager (GTM) implementation.

> Error tracking/logging is done via Sentry implementation.

> API is created as a separate NodeJS (ExpressJS) project. (https://github.com/IsmetAkyurek/policy-checkout-app-api)

#

## Test Coverage

> Project has 100% test coverage on all 4 bases.

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)

#

## Technologies Used

- React (v18)
- TypeScript
- SCSS
- Jest
- React Testing Library
- GTM
- Sentry
- Storybook
- Axios

#

## Project Structure

```
.
├── public
│   ├── img
│   ├── favicon.png
│   ├── index.html
├── src
│   ├── Core                                  # Core module of the application
│   │   ├── api                               # Base axios instance
│   │   ├── assets
│   │   │   └── icons                         # SVG icons
│   │   ├── components                        # Common components
│   │   │   ├── Component                     # Example component structure
│   │   │   │   ├── Component.module.scss     # Component SCSS Module
│   │   │   │   ├── Component.stories.tsx     # Component Storybook
│   │   │   │   ├── Component.test.tsx        # Component tests
│   │   │   │   └── index.tsx
│   │   ├── constants                         # Constant variables
│   │   ├── hooks                             # Common hooks
│   │   │   ├── Hook                          # Example hook structure
│   │   │   │   ├── index.ts
│   │   │   │   └── Hook.test.ts              # Hook tests
│   │   ├── styles                            # Common SCSS files
│   │   │   ├── main.scss                     # Global stylings
│   │   │   ├── mixins.scss                   # SCSS mixins
│   │   │   └── variables.scss                # SCSS variables
│   │   ├── types                             # Common types
│   │   └── utils                             # Common util functions
│   │   |   ├── Util                          # Example util function structure
│   │   │   |   ├── Util.test.ts              # Util function tests
│   │   │   |   └── index.ts
│   ├── Policy                                # Policy module
│   │   ├── api                               # Policy API functions
│   │   │   ├── apiFunction                   # Example API function structure
│   │   │   │   ├── apiFunction.test.ts       # Api function tests
│   │   │   │   └── index.ts
│   │   ├── components                        # Policy components
│   │   │   ├── Component                     # Example component structure (Same as Core components)
│   │   ├── constants                         # Policy constant variables
│   │   ├── context                           # Policy Context
│   │   │   ├── context                       # Policy Base Context (createContext)
│   │   │   │   ├── Context.test.ts
│   │   │   │   └── index.ts
│   │   │   ├── provider                      # Policy Context Provider
│   │   │   │   ├── Provider.test.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── index.ts                      # Policy Context useContext hook
│   │   │   └── usePolicyContext.test.ts
│   │   ├── layout                            # Policy common layout
│   │   │   ├── PolicyLayout.module.scss
│   │   │   ├── PolicyLayout.test.tsx
│   │   │   └── index.tsx
│   │   ├── types                             # Policy types
│   │   ├── utils                             # Policy util functions
│   │   ├── Policy.test.tsx
│   │   └── index.tsx
│   ├── __mocks__
│   ├── __snapshots__
├── README.md
```

#

## Installating and running

> In order to install, run and test the application follow the next instructions.

### Install Dependencies

> After cloning the repository navigate to its root folder using the command line and execute the following command:

```shell
> yarn install
```

### Running Storybook

> To start the Storybook just run the following command on project's root folder:

```shell
> yarn storybook
```

### Running

> To start the application just run the following command on project's root folder:

```shell
> yarn start
```

### Testing

> To run the tests use the following command on project's root folder:

```shell
> yarn test
```

### Building

> To run the tests use the following command on project's root folder:

```shell
> yarn build
```

### Pipelines and Pull Requests

> Github actions are used to run checks on Pull Requests opened to `main` branch. PR Check pipeline steps are as follows :

1. Install : Prepare NodeJS environment and install&cache dependencies.
2. Typescript Type Check : Run TypeScript to check the validity of types.
3. Lint : Run Eslint to check lint controls.
4. Test : Run all tests defined in the project.
5. Build : Run build command to make sure project builds without any error.

### Deployment

> Project is connected and deployed to Vercel, which is being triggered by commiting or merging to `main` branch. There are no additional steps needed.
