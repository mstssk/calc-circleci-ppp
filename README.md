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
$ npx @mstssk/ppp <activeUsers> <dlc:run> ...<resource_class:min>
```

Example

```sh
# 7 users, 5000 min for medium class.
$ npx @mstssk/ppp 7 medium:5000
# output: 105
```

```sh
# 5 users, 1500 min for large class, 1000 min for macos, Use Docker layer caching for 100 times.
$ npx @mstssk/ppp 5 large:1500 macos-large:1000 dlc:100
# output: 105
```
