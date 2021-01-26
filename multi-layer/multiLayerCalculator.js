const yeniAgirlik = require('./util/yeniAgirlik');
const calculateForward = require('./calculateForward');
const calculateError = require('./calculateError');

// multiLayerCalculator(
//   [10, 30, 20],
//   [
//     [0.2, -0.1, 0.4], h1
//     [0.7, -1.2, 1.2], h2
//     [1.1, 0.1],       t1
//     [3.1, 1.17],      t2
//     [1.1, 0.1],       q1
//     [3.1, 1.17],      q2
//   ],
//   [1, 0],
//   0.1
// );

function multiLayerCalculator(giris, agirlik, beklenenCikis, katsayi) {
  // giris ve agirlik alinip, toplam ve sigmoidler hesaplaniyor
  const { hSigmoid, tSigmoid, qSigmoid } = calculateForward(giris, agirlik);

  console.log('\nGeriye donus basladi\n');
  console.log('--------');

  // sigmoidler , agirlik ve beklenen cikis alinip, hatadegerleri ve bagil hatalar hesaplaniyor.
  const { hHataDegeri, tHataDegeri, qHataDegeri } = calculateError(
    qSigmoid,
    hSigmoid,
    tSigmoid,
    agirlik,
    beklenenCikis
  );

  console.log('\nYeni agirliklar\n');

  // giris h1 arasi
  let i1_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[0], agirlik[0][0]);
  let i2_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[1], agirlik[0][1]);
  let i3_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[2], agirlik[0][2]);

  // giris h2 arasi
  let i1_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[0], agirlik[1][0]);
  let i2_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[1], agirlik[1][1]);
  let i3_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[2], agirlik[1][2]);

  // h1 t1 arasi
  let h1_t1 = yeniAgirlik(katsayi, tHataDegeri[0], hSigmoid[0], agirlik[2][0]);
  let h2_t1 = yeniAgirlik(katsayi, tHataDegeri[0], hSigmoid[1], agirlik[2][1]);

  // h2 t2 arasi
  let h1_t2 = yeniAgirlik(katsayi, tHataDegeri[1], hSigmoid[0], agirlik[3][0]);
  let h2_t2 = yeniAgirlik(katsayi, tHataDegeri[1], hSigmoid[1], agirlik[3][1]);

  // t1 q1 arasi
  let t1_q1 = yeniAgirlik(katsayi, qHataDegeri[0], tSigmoid[0], agirlik[4][0]);
  let t1_q2 = yeniAgirlik(katsayi, qHataDegeri[1], tSigmoid[0], agirlik[5][0]);

  // t2 q2 arasi
  let t2_q1 = yeniAgirlik(katsayi, qHataDegeri[0], tSigmoid[1], agirlik[4][1]);
  let t2_q2 = yeniAgirlik(katsayi, qHataDegeri[1], tSigmoid[1], agirlik[5][1]);

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

  console.log('----------------------');

  console.log('t1 - cikis 1 arasi = ', t1_q1);
  console.log('t1 - cikis 2 arasi = ', t1_q2);
  console.log('t2 - cikis 1 arasi = ', t2_q1);
  console.log('t2 - cikis 2 arasi = ', t2_q2);

  let h1Yeni = [i1_h1, i2_h1, i3_h1];
  let h2Yeni = [i1_h2, i2_h2, i3_h2];
  let t1Yeni = [h1_t1, h2_t1];
  let t2Yeni = [h1_t2, h2_t2];
  let q1Yeni = [t1_q1, t1_q2];
  let q2Yeni = [t2_q1, t2_q2];

  return { h1Yeni, h2Yeni, t1Yeni, t2Yeni, q1Yeni, q2Yeni };
}

module.exports = multiLayerCalculator;
