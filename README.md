## Shutterstock API SDK 1.6.0

This generator creates a TypeScript/JavaScript client that uses the runtime's native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch). The generated module can be used in the following environments:

Environment
* Node.js 18 or newer
* Webpack
* Browserify

Language level
* ES2021

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @shutterstock/public-api-typescript-sdk --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
