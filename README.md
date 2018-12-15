[![npm version](https://badge.fury.io/js/%40mstssk%2Fppp.svg)](https://badge.fury.io/js/%40mstssk%2Fppp)
[![CircleCI](https://circleci.com/gh/mstssk/calc-circleci-ppp.svg?style=svg)](https://circleci.com/gh/mstssk/calc-circleci-ppp)

# calc-circleci-ppp
Calculate CircleCI's Performance Pricing Plan.

## How to Use

### Web

https://mstssk.github.io/calc-circleci-ppp/

### CLI

Usage
```sh
$ npx @mstssk/ppp <activeUsers> ...<resource_class:min>
```

Example
```sh
$ npx @mstssk/ppp 5 large:1500 macos-large:1000
# output: 123
```

----

## How to Release (for 🍏)

```sh
# See https://efcl.info/2015/04/30/npm-namespace/
$ npm publish --access=public
```
