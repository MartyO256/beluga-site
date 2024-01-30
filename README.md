# Beluga Site

This is a modernization of the website [https://complogic.cs.mcgill.ca/beluga](https://complogic.cs.mcgill.ca/beluga) for the Beluga programming language and proof assistant.
It is built as a static website using [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/).

A version of this site is deployed at [https://martyo256.github.io/beluga-site/](https://martyo256.github.io/beluga-site/).

## Prerequisites

Install [Node.js](https://nodejs.org/en) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then install the project's dependencies using `npm install`.

## Developing

Start a development server with:

```bash
npm run dev
```

The `--host` flag can be passed to the `dev` command as `npm run dev -- --host` to expose the app to the local network to test it on mobile devices.

## Building

Create a production version of the app with:

```bash
npm run build
```

The contents of the generated `build` directory can then be deployed to the Web server.

You may preview the production build with `npm run preview`.
