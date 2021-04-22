# npms-lib

<p align="center">

  <img alt="NPM" src="https://img.shields.io/npm/l/npms-lib?style=flat-square">

  <img alt="Codecov branch" src="https://img.shields.io/codecov/c/github/frantss/npms-lib/master?logo=codecov&style=flat-square&token=e30335a5a6a3484d9055b1e319ccc029&label=overall%20coverage">

  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/Frantss/npms-lib/master?label=master&logo=circleci&style=flat-square&token=c97c78f1040c038c4857e8bbc6ab5a4acc310455">

  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/Frantss/npms-lib/develop?label=develop&logo=circleci&style=flat-square&token=c97c78f1040c038c4857e8bbc6ab5a4acc310455">
</p>

Typed API client for [npms](https://npms.io/)

## Contents

- [npms-lib](#npms-lib)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Example](#example)
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

## Example

```ts
import * as npms from 'npms-lib';

const result = await npms.search({ query: 'typescript', size: 1 });
console.log(result.results[0].package.name); // typescript
```

## API Reference

- `search`: Returns specified number of packages that match the specified parameters.

- `suggestions`: Like `search` but with pre-set search parameters.

- `info`: Returns information from one or more specified packages.

## Use with Node.js

The library assumes it's running on a browser, so it relays on the [`fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 
[`node-fetch`](https://www.npmjs.com/package/node-fetch) is a good option:

```ts
import fetch from 'node-fetch';
import * as npms from 'npms-lib';

npms.config.fetch = fetch;
```

## License

All the files in the repository are subject to the `MIT` license. Please refer to the License file at the root of the project to know more about it.
