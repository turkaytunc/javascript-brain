const brain = require('brain.js');

const net = new brain.NeuralNetwork({ hiddenLayers: [4] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

net.train(trainingData, {
  iterations: 2,
  log: (error) => console.log(error),
  logPeriod: 1,
});

console.log(net.run([0, 1]));
