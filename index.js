const multiLayerCalculator = require('./multi-layer/multiLayerCalculator');

let h1Yeni = [0.2, -0.1, 0.4];
let h2Yeni = [0.7, -1.2, 1.2];
let t1Yeni = [1.1, 0.1];
let t2Yeni = [3.1, 1.17];
let q1Yeni = [1.2, 0.3];
let q2Yeni = [2.1, 1.07];

function iterateCalculation(iterasyon) {
  for (let i = 0; i < iterasyon; i++) {
    let result = multiLayerCalculator([10, 30, 20], [h1Yeni, h2Yeni, t1Yeni, t2Yeni, q1Yeni, q2Yeni], [1, 0], 0.1);

    h1Yeni = result.h1Yeni;
    h2Yeni = result.h2Yeni;
    t1Yeni = result.t1Yeni;
    t2Yeni = result.t2Yeni;
    q1Yeni = result.q1Yeni;
    q2Yeni = result.q2Yeni;

    console.log('\n------------');
    console.log(`iterasyon ${i + 1} bitti.`);
    console.log('------------');
    console.log('yeni degerler');
    console.log(`
      h1: ${h1Yeni}
      h2: ${h2Yeni}
      t1: ${t1Yeni}
      t2: ${t2Yeni}
      q1: ${q1Yeni}
      q2: ${q2Yeni}`);
    console.log('\n------------\n');
  }
}

iterateCalculation(2);
