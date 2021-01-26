const net = require('./net');
const sigmoid = require('./sigmoid');

function calculateForward(giris, agirlik) {
  let h1 = net(giris, agirlik[0]);
  console.log('h1 toplam = ', h1);

  let h1Sigmoid = sigmoid(h1);
  console.log('h1 sigmoid = ', h1Sigmoid);

  let h2 = net(giris, agirlik[1]);
  console.log('h2 toplam = ', h2);

  let h2Sigmoid = sigmoid(h2);
  console.log('h2 sigmoid = ', h2Sigmoid);

  let q1 = net([h1Sigmoid, h2Sigmoid], agirlik[2]);
  console.log('q1 toplam = ', q1);

  let q1Sigmoid = sigmoid(q1);
  console.log('q1 sigmoid = ', q1Sigmoid);

  let q2 = net([h1Sigmoid, h2Sigmoid], agirlik[3]);
  console.log('q2 toplam = ', q2);

  let q2Sigmoid = sigmoid(q2);
  console.log('q1 sigmoid = ', q2Sigmoid);

  return { h1Sigmoid, h2Sigmoid, q1Sigmoid, q2Sigmoid };
}

module.exports = calculateForward;
