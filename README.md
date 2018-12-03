# calc-circleci-ppp
Calculate CircleCI's Performance Pricing Plan.

## How to Use

Usage
```
$ npx @mstssk/ppp <activeUsers> ...<resource_class:min>
```

Example
```
$ npx @mstssk/ppp 5 large:1500 macos-large:1000
# output: 123
```

## How to Release (for 🍏)

```
# See https://efcl.info/2015/04/30/npm-namespace/
$ npm publish --access=public
```
