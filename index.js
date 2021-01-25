function sum(nodeValues, weights) {
  let result = 0;
  for (let i = 0; i < nodeValues.length; i++) {
    result += nodeValues[i] * weights[i];
  }
  return result;
}

function sigmoid(sum) {
  return 1 / (1 + Math.exp(-sum));
}

const top = sum([0.999, 0.0067], [1.1, 0.1]);

const sig = sigmoid(top);

console.log(sig);
console.log(top);
