# npms-lib

<div align="center">

  <img alt="license" src="https://img.shields.io/npm/l/npms-lib?style=flat-square">
  
  <img alt="npm version" src="https://img.shields.io/npm/v/npms-lib?style=flat-square">

  <img alt="includes types" src="https://img.shields.io/npm/types/npms-lib?style=flat-square">
</div>

<div align="center">
  <img alt="codecoverage percentage" src="https://img.shields.io/codecov/c/github/frantss/npms-lib/master?logo=codecov&style=flat-square&token=e30335a5a6a3484d9055b1e319ccc029&label=overall%20coverage">

  <img alt="pipeline status master" src="https://img.shields.io/circleci/build/github/Frantss/npms-lib/master?label=master&logo=circleci&style=flat-square&token=c97c78f1040c038c4857e8bbc6ab5a4acc310455">

  <img alt="pipeline status develop" src="https://img.shields.io/circleci/build/github/Frantss/npms-lib/develop?label=develop&logo=circleci&style=flat-square&token=c97c78f1040c038c4857e8bbc6ab5a4acc310455">
</div>

<div align="center">
  <img alt="minified size" src="https://badgen.net/bundlephobia/min/npms-lib?style=flat-square">
  <img alt="minzip size" src="https://badgen.net/bundlephobia/minzip/npms-lib?style=flat-square">
  <img alt="dependency count" src="https://badgen.net/bundlephobia/dependency-count/npms-lib?style=flat-square">
  <img alt="tree shaking" src="https://badgen.net/bundlephobia/tree-shaking/npms-lib?style=flat-square">
</div>

Typed API client for [npms](https://npms.io/)

## Contents

- [npms-lib](#npms-lib)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Use with Node.js](#use-with-nodejs)
  - [License](#license)

## Installation

```shell
# NPM
npm install npms-lib

# Yarn
yarn add npms-lib
```

## Usage

```ts
import * as npms from 'npms-lib';

const result = await npms.search({ query: 'typescript', size: 1 });
console.log(result.results[0].package.name); // typescript

const result = await npms.search('preact');
console.log(result.results[0].package.name); // preact
```

## API Reference

- `search`: Returns specified number of packages that match the specified parameters.

- `suggestions`: Like `search` but with pre-set search parameters.

- `info`: Returns information from one or more specified packages.

## Use with Node.js

`npms-lib` utilizes [`window.fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) by default, if you want to run it on Node you will have to polyfill the fetch function. [`node-fetch`](https://www.npmjs.com/package/node-fetch) is a good alternative.
To configure the fetch polyfill just change the reference in the `config` object.

```ts
import fetch from 'node-fetch';
import * as npms from 'npms-lib';

npms.config.fetch = fetch;
```

## License

All the files in the repository are subject to the `MIT` license. Please refer to the License file at the root of the project to know more about it.
