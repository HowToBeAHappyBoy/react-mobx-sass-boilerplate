# React MobX Sass Boilerplate
 
A web development boilerplate for React + MobX + React-Router + Sass
## Stack

* React
* MobX
* React-Router
* Sass + CSS Modules

## Installation and Starting

```
yarn

yarn start
```

## Structure

During app development, you should care about these files:

```
react-mobx-sass-boilerplate/
└───src/
    │
    └───components/
    |     App.js
    |     ...
    │
    └───config/
    |     config.json
    │
    └───containers/
    |
    |
    └───stores/
    |     index.js
    |     ExStore.js
    │
    └───styles/
    |     └───lib/
    |          _all.scss
    |     base.scss
    |     utils.scss
    │
    └───pages/
    |     index.js
    |     ...
    |
    └───Root.js
    └───index.js
```

The rest can be extended if needed:

1. `index.html`
1. `index.js` - Entry point for browser bundle
1. `App.js` - Manages routing
1. `Root.js` - Container component for the app
