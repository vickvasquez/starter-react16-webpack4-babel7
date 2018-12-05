# React + Webpack  + Babel  Starter Kit


### Supports

* React 16.6.3
* Webpack 4
* Babel 7
* SASS
* Hot Module Reloading
* Graphql
* Eslint

### Features

* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your scss by ```import styles from './path/to.scss';```.
* Both js and scss hot loaded during development.

### To run

* Clone the project:

* Then install the dependencies:

```
yarn add
```

* Run development server:

```
yarn dev
```

Open the web browser to `http://localhost:8081/`

### To build the production package

```
yarn build
```


### Eslint
There is a `.eslintrc.js` config for eslint ready with React plugin.


### Notes on importing css styles
* styles having /src/pages or src/components in their absolute path considered part of the application and exported as local css modules.
* other styles considered global styles used by components and included in the css bundle directly.

