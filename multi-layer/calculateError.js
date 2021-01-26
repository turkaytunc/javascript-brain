const errorValue = require('./util/errorValue');
const layerErrorValue = require('./util/layerErrorValue');

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

function calculateError(qSigmoid, hSigmoid, tSigmoid, agirlik, beklenenCikis) {
  let q1HataDegeri = errorValue(qSigmoid[0], beklenenCikis[0]);
  let q2HataDegeri = errorValue(qSigmoid[1], beklenenCikis[1]);

  // T nodelari hata hesaplama

  let t1BagilHata = agirlik[4][0] * q1HataDegeri + agirlik[5][0] * q2HataDegeri;
  let t1HataDegeri = layerErrorValue(t1BagilHata, tSigmoid[0]);

  let t2BagilHata = agirlik[4][1] * q1HataDegeri + agirlik[5][1] * q2HataDegeri;
  let t2HataDegeri = layerErrorValue(t2BagilHata, tSigmoid[1]);

  // H nodelari hata hesaplama

  let h1BagilHata = agirlik[2][0] * t1HataDegeri + agirlik[3][0] * t2HataDegeri;
  let h1HataDegeri = layerErrorValue(h1BagilHata, hSigmoid[0]);

  let h2BagilHata = agirlik[2][1] * t1HataDegeri + agirlik[3][1] * t2HataDegeri;
  let h2HataDegeri = layerErrorValue(h2BagilHata, hSigmoid[1]);

  console.log('q1 hata degeri = ', q1HataDegeri);
  console.log('q2 hata degeri = ', q2HataDegeri);

  console.log('-----------------');

  console.log('t1 bagil hata = ', t1BagilHata);
  console.log('t1 hata degeri = ', t1HataDegeri);
  console.log('t2 bagil hata = ', t2BagilHata);
  console.log('t2 hata degeri = ', t2HataDegeri);

  console.log('-----------------');

  console.log('h1 bagil hata = ', h1BagilHata);
  console.log('h1 hata degeri = ', h1HataDegeri);
  console.log('h2 bagil hata = ', h2BagilHata);
  console.log('h2 hata degeri = ', h2HataDegeri);

  let hHataDegeri = [h1HataDegeri, h2HataDegeri];
  let tHataDegeri = [t1HataDegeri, t2HataDegeri];
  let qHataDegeri = [q1HataDegeri, q2HataDegeri];

  return { hHataDegeri, tHataDegeri, qHataDegeri };
}

module.exports = calculateError;
