# React Intl Universal Application 

> A light example of universal application with [react-intl](https://github.com/yahoo/react-intl) and [redux](http://reactjs.github.io/redux/)

> Shows also how to use [storybook](https://github.com/storybooks/react-storybook) with [react-intl](https://github.com/yahoo/react-intl)

> **Important:** Project was built only for development purpose, it is not ready for production usage.

## Libraries

- [react-intl](https://github.com/yahoo/react-intl)
- [formatjs](http://formatjs.io/)
- [redux](http://reactjs.github.io/redux/)
- [storybook](https://github.com/storybooks/react-storybook)
- [ramda](http://ramdajs.com/) (just for one function :) )
- [styled-components](https://github.com/styled-components/styled-components)
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) with [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- And much more. Explore the repository.

## Prerequisites

- [node.js](http://nodejs.org) Node 6+
- [git](https://git-scm.com/downloads)

## Create App
```shell
git clone
cd react-intl-example
yarn (or npm install)
``` 

## Start Development

- run `yarn start`
- point your browser to [localhost:8000](http://localhost:8000)

[storybook](https://github.com/storybooks/react-storybook) prerequisites
- run `yarn run extract-messages` to extract messages for [react-intl](https://github.com/yahoo/react-intl)
- run `yarn run combine-messages` to create a common language file `all.json`
- then run `yarn run storybook`
