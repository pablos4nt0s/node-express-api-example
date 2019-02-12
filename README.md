# node-express-api-example [![travis][travis-image]][travis-url] [![Issue Count][codeclimate-image]][codeclimate-url] [![Commitizen friendly][commitizen-image]][commitizen-url]

[travis-image]: https://img.shields.io/travis/rectius/node-express-api-example/master.svg
[travis-url]: https://travis-ci.org/rectius/node-express-api-example
[codeclimate-image]: https://codeclimate.com/github/rectius/node-express-api-example/badges/issue_count.svg
[codeclimate-url]: https://codeclimate.com/github/rectius/node-express-api-example
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

### simple, robust, REST API implementation

Node.js implementation of a REST API using express and MongoDB. It uses JWT authentication for authentication. Also helps your team to promote best practices by following simple conventions.

## features

- Authentication via JsonWebToken [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
- Code Linting [ESLint](http://eslint.org). [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- Auto server restart [nodemon](https://github.com/remy/nodemon).
- Code Coverage via [nyc](https://www.npmjs.com/package/nyc).
- API parameter validation via [express-validation](https://www.npmjs.com/package/express-validation).
- Secure app via [helmet](https://github.com/helmetjs/helmet).
- Uses [yarn](https://yarnpkg.com) over npm.
- CORS support via [cors](https://github.com/expressjs/cors).
- Has `.editorconfig` which helps developers define and maintain consistent coding styles between different editors and IDEs.

## install

Clone the repo:
```sh
git clone https://github.com/rectius/node-express-api-example.git
cd node-express-api-example
```

Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

## create environment variables file
```sh
# rename
cp .env.example .env
```

## start server

Run server:
```sh
# Start server
yarn start
```

## tests

Tests:
```sh
# Run tests with code coverage
yarn test
```

## maintainers

Pablo Souza (Github: <a href="https://github.com/rectius">@rectius</a>)

## license

MIT. Copyright (c) [Pablo Souza](http://about.me/pablosouza/).
