const errorValue = require('./util/errorValue');
const layerErrorValue = require('./util/layerErrorValue');

function calculateError(q1Sigmoid, q2Sigmoid, h1Sigmoid, h2Sigmoid, agirlik, beklenenCikis) {
  let q1HataDegeri = errorValue(q1Sigmoid, beklenenCikis[0]);
  console.log('q1 hata degeri = ', q1HataDegeri);

  let q2HataDegeri = errorValue(q2Sigmoid, beklenenCikis[1]);
  console.log('q2 hata degeri = ', q2HataDegeri);

  let h1BagilHata = agirlik[2][0] * q1HataDegeri + agirlik[3][0] * q2HataDegeri;
  console.log('h1 bagil hata = ', h1BagilHata);

  let h1HataDegeri = layerErrorValue(h1BagilHata, h1Sigmoid);
  console.log('h1 hata degeri = ', h1HataDegeri);

  let h2BagilHata = agirlik[2][1] * q1HataDegeri + agirlik[3][1] * q2HataDegeri;
  console.log('h2 bagil hata = ', h2BagilHata);

  let h2HataDegeri = layerErrorValue(h2BagilHata, h2Sigmoid);
  console.log('h2 hata degeri = ', h2HataDegeri);

  return { h1HataDegeri, h2HataDegeri, q1HataDegeri, q2HataDegeri };
}

module.exports = calculateError;
