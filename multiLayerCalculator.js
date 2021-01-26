const yeniAgirlik = require('./multi-layer/util/yeniAgirlik');
const calculateForward = require('./multi-layer/calculateForward');
const calculateError = require('./multi-layer/calculateError');

function calculateNetwork(giris, agirlik, beklenenCikis, katsayi) {
  const { hSigmoid, tSigmoid, qSigmoid } = calculateForward(giris, agirlik);

  console.log('\nGeriye donus basladi\n');

  const { hHataDegeri, t1HataDegeri, t2HataDegeri, q1HataDegeri, q2HataDegeri } = calculateError(
    qSigmoid,
    hSigmoid,
    tSigmoid,
    agirlik,
    beklenenCikis
  );

  console.log('\nYeni agirliklar\n');

  let i1_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[0], agirlik[0][0]);
  let i1_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[0], agirlik[1][0]);

  let i2_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[1], agirlik[0][1]);
  let i2_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[1], agirlik[1][1]);

  let i3_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[2], agirlik[0][2]);
  let i3_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[2], agirlik[1][2]);

  let h1_t1 = yeniAgirlik(katsayi, t1HataDegeri, hSigmoid[0], agirlik[2][0]);
  let h1_t2 = yeniAgirlik(katsayi, t2HataDegeri, hSigmoid[0], agirlik[3][0]);

  let h2_t1 = yeniAgirlik(katsayi, t1HataDegeri, hSigmoid[1], agirlik[2][1]);
  let h2_t2 = yeniAgirlik(katsayi, t2HataDegeri, hSigmoid[1], agirlik[3][1]);

  console.log('giris 1 - h1 arasi  = ', i1_h1);
  console.log('giris 1 - h2 arasi  = ', i1_h2);
  console.log('giris 2 - h1 arasi  = ', i2_h1);
  console.log('giris 2 - h2 arasi  = ', i2_h2);
  console.log('giris 3 - h1 arasi  = ', i3_h1);
  console.log('giris 3 - h2 arasi  = ', i3_h2);

  console.log('----------------------');
  console.log('h1 - t1 arasi       = ', h1_t1);
  console.log('h1 - t2 arasi arasi = ', h1_t2);
  console.log('h2 - t1 arasi arasi = ', h2_t1);
  console.log('h2 - t2 arasi arasi = ', h2_t2);

  console.log('----------------------------------------');

  let t1_q1 = yeniAgirlik(katsayi, q1HataDegeri, tSigmoid[0], agirlik[4][0]);
  let t1_q2 = yeniAgirlik(katsayi, q2HataDegeri, tSigmoid[0], agirlik[5][0]);

  let t2_q1 = yeniAgirlik(katsayi, q1HataDegeri, tSigmoid[1], agirlik[4][1]);
  let t2_q2 = yeniAgirlik(katsayi, q2HataDegeri, tSigmoid[1], agirlik[5][1]);

  console.log('t1 - cikis 1 arasi = ', t1_q1);
  console.log('t1 - cikis 2 arasi = ', t1_q2);
  console.log('t2 - cikis 1 arasi = ', t2_q1);
  console.log('t2 - cikis 2 arasi = ', t2_q2);
}

calculateNetwork(
  [10, 30, 20],
  [
    [0.2, -0.1, 0.4],
    [0.7, -1.2, 1.2],
    [1.1, 0.1],
    [3.1, 1.17],
    [1.1, 0.1],
    [3.1, 1.17],
  ],
  [1, 0],
  0.1
);

console.log('------------');
