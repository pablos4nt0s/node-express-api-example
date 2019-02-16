# node-express-api-example [![travis][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Issue Count][codeclimate-image]][codeclimate-url] [![Commitizen friendly][commitizen-image]][commitizen-url]

[travis-image]: https://img.shields.io/travis/rectius/node-express-api-example/master.svg
[travis-url]: https://travis-ci.org/rectius/node-express-api-example
[coveralls-image]: https://coveralls.io/repos/github/rectius/node-express-api-example/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/rectius/node-express-api-example?branch=master
[codeclimate-image]: https://codeclimate.com/github/rectius/node-express-api-example/badges/issue_count.svg
[codeclimate-url]: https://codeclimate.com/github/rectius/node-express-api-example
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

### simple, robust, REST API implementation

Node.js implementation of a REST API using express and MongoDB. Also helps your team to promote best practices by following simple conventions.

## Features

- Code Linting [ESLint](http://eslint.org). [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- Auto server restart [nodemon](https://github.com/remy/nodemon).
- Code Coverage via [nyc](https://www.npmjs.com/package/nyc).
- Secure app via [helmet](https://github.com/helmetjs/helmet).
- Uses [yarn](https://yarnpkg.com) over npm.
- Has `.editorconfig` which helps developers define and maintain consistent coding styles between different editors and IDEs.

## Install dependencies

Clone the repo:
```sh
git clone https://github.com/rectius/node-express-api-example.git
cd node-express-api-example
```

Install yarn:
```js
npm install -g yarn node-env-run
```

Install dependencies:
```sh
yarn
```

## Configure 

Environment variables:
```sh
# rename
cp .env.example .env
```

## Running the example

Run server:
```sh
# Start server
yarn start
```

Then access the example in the browser in http://localhost:3000

## Examples

```sh
# Check healthcheck
curl -i http://localhost:3000/healthcheck

# Get an addresses by postal code
curl -i http://localhost:3000/api/address/postalcode/18046390

# Get addresses by city
curl -i http://localhost:3000/api/address/city/Sorocaba
```

## Tests

Tests:
```sh
# Run tests with code coverage
yarn test
```

## Maintainers

- Adriano Bastos (Github: <a href="https://github.com/adrianobastos">@adrianobastos</a>)
- Julio Sandroni (Github: <a href="https://github.com/sandronister">@sandronister</a>)
- Luiz Henrique Vidal (Github: <a href="https://github.com/luizfef06">@luizfef06</a>)
- Pablo Souza (Github: <a href="https://github.com/rectius">@rectius</a>)
