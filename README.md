# Sortino Ratio

A Javascript implementation of the [Sortino Ratio](https://en.wikipedia.org/wiki/Sortino_ratio).

Further details about this calculation can be found [here](http://www.sunrisecapital.com/wp-content/uploads/2014/06/Futures_Mag_Sortino_0213.pdf).

## Installation
``` bash
npm install --save-dev sortino-ratio
```

## Usage
```javascript
 const return_values = [2, 1, -1, 18, 8, -2, 1, -1]

 sortino(return_values)
 // 3.7527767497325675
```
