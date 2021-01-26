const sigmoid = require('./util/sigmoid');
const yeniAgirlik = require('./util/yeniAgirlik');
const net = require('./util/net');
const errorValue = require('./util/errorValue');
const layerErrorValue = require('./util/layerErrorValue');

function calculateNetwork(giris, agirlik, beklenenCikis, katsayi) {
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

  console.log('Geriye donus basladi');

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

  console.log('Yeni agirliklar');

  let i1_h1 = yeniAgirlik(katsayi, h1HataDegeri, giris[0], agirlik[0][0]);
  console.log('giris 1 - ara katman 1 arasi = ', i1_h1);

  let i1_h2 = yeniAgirlik(katsayi, h2HataDegeri, giris[0], agirlik[1][0]);
  console.log('giris 1 - ara katman 2 arasi = ', i1_h2);

  let i2_h1 = yeniAgirlik(katsayi, h1HataDegeri, giris[1], agirlik[0][1]);
  console.log('giris 2 - ara katman 1 arasi = ', i2_h1);

  let i2_h2 = yeniAgirlik(katsayi, h2HataDegeri, giris[1], agirlik[1][1]);
  console.log('giris 2 - ara katman 2 arasi = ', i2_h2);

  let i3_h1 = yeniAgirlik(katsayi, h1HataDegeri, giris[2], agirlik[0][2]);
  console.log('giris 3 - ara katman 1 arasi = ', i3_h1);

  let i3_h2 = yeniAgirlik(katsayi, h2HataDegeri, giris[2], agirlik[1][2]);
  console.log('giris 3 - ara katman 2 arasi = ', i3_h2);

  console.log('----------------------------------------');

  let h1_q1 = yeniAgirlik(katsayi, q1HataDegeri, h1Sigmoid, agirlik[2][0]);
  console.log('ara katman 1 - cikis 1 arasi = ', h1_q1);

  let h1_q2 = yeniAgirlik(katsayi, q2HataDegeri, h1Sigmoid, agirlik[3][0]);
  console.log('ara katman 1 - cikis 2 arasi = ', h1_q2);

  let h2_q1 = yeniAgirlik(katsayi, q1HataDegeri, h2Sigmoid, agirlik[2][1]);
  console.log('ara katman 2 - cikis 1 arasi = ', h2_q1);

  let h2_q2 = yeniAgirlik(katsayi, q2HataDegeri, h2Sigmoid, agirlik[3][1]);
  console.log('ara katman 2 - cikis 2 arasi = ', h2_q2);
}

calculateNetwork(
  [10, 30, 20],
  [
    [0.2, -0.1, 0.4],
    [0.7, -1.2, 1.2],
    [1.1, 0.1],
    [3.1, 1.17],
  ],
  [1, 0],
  0.1
);

console.log('------------');
