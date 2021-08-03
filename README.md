# create-blocklet

## Scaffolding Your First Blocklet

> **Compatibility Note:**
> Blocklet template requires [Node.js](https://nodejs.org/) version >=14.0.0.

## What can i do?

By using `create-blocklet` you can create a new blocklet in a few minutes. You can get a demo blocklet, understand how a blocklet works and how to use them.

## Start

With NPM:

```bash
npm init blocklet@latest [blocklet-name]
```

With Yarn:

```bash
yarn create blocklet [blocklet-name]
```

With PNPM:

```bash
pnpx create-blocklet [blocklet-name]
```

Currently supported template presets include:

**dapp**

- `react`

**static**

- `react`

## Community Templates

create-blocklet is a tool to quickly start a blocklet from a basic template for popular frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your blocklet with github repository template.

```bash
npx degit user/blocklet my-blocklet
cd my-blocklet

npm install
npm run dev
```

If the blocklet uses `main` as the default branch, suffix the blocklet repo with `#main`

```bash
npx degit user/blocklet#main my-blocklet
```