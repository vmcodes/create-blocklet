# PROJECT_DESCRIPTION

This project was bootstrapped with [Create Blocklet](https://github.com/blocklet/create-blocklet).

This blocklet is a dapp project, which means this is a full-stack application. It's contained both `server` and `client` code.

## FILE_STRUCTURE

- public/ - static files
  - favicon.ico - favicon
  - favicon.svg - favicon
  - index.html - main html file, template for react
- screenshots/ - Screenshots
- api/ - Api side code
  - hooks/ - blocklet lifecycle hooks
  - libs/ - Api side libraries
  - middlewares/ - Api side middlewares
  - routes/ - Api side routes
  - routes/auth - DID Connect backend registration
  - dev.js - Api side dev mode entry point
  - index.js - Api side entry point
- src/ - Client side code (A standard react app structure)
- .env - Environment variables
- .env.development.local - Local development environment variables
- .eslintrc.js - ESLint configuration
- .gitignore - Git ignore file
- .prettierrc - Prettier configuration
- blocklet.md - Blocklet README
- blocklet.yml - Blocklet configuration
- LICENSE - License file
- logo.png - Blocklet logo file
- Makefile - Makefile
- package.json - Npm package file
- README.md - A guide for this blocklet
- version - Version file