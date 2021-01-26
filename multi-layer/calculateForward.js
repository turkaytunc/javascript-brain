const net = require('./util/net');
const sigmoid = require('./util/sigmoid');

function calculateForward(giris, agirlik) {
  let h = [];
  let t = [];
  let q = [];
  let hSigmoid = [];
  let tSigmoid = [];
  let qSigmoid = [];

  h.push(net(giris, agirlik[0]));
  hSigmoid.push(sigmoid(h[0]));

  h.push(net(giris, agirlik[1]));
  hSigmoid.push(sigmoid(h[1]));

  t.push(net([hSigmoid[0], hSigmoid[1]], agirlik[2]));
  tSigmoid.push(sigmoid(t[0]));

  t.push(net([hSigmoid[0], hSigmoid[1]], agirlik[3]));
  tSigmoid.push(sigmoid(t[1]));

  console.log('h1 toplam = ', h[0]);
  console.log('h2 toplam = ', h[1]);
  console.log('t1 toplam = ', t[0]);
  console.log('t2 toplam = ', t[1]);

  console.log('------------------');

  console.log('h1 sigmoid = ', hSigmoid[0]);
  console.log('h2 sigmoid = ', hSigmoid[1]);
  console.log('t1 sigmoid = ', tSigmoid[0]);
  console.log('t2 sigmoid = ', tSigmoid[1]);

  console.log('---------------------');

  q.push(net([tSigmoid[0], tSigmoid[1]], agirlik[4]));
  q.push(net([tSigmoid[0], tSigmoid[1]], agirlik[5]));

  qSigmoid.push(sigmoid(q[0]));
  qSigmoid.push(sigmoid(q[1]));

  console.log('q1 toplam = ', q[0]);
  console.log('q2 toplam = ', q[1]);

  console.log('q1 sigmoid = ', qSigmoid[0]);
  console.log('q1 sigmoid = ', qSigmoid[1]);

  return { hSigmoid, tSigmoid, qSigmoid };
}

module.exports = calculateForward;
