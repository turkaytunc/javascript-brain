function sum(arr, agirlik) {
  let toplam = 0;
  for (let i = 0; i < arr.length; i++) {
    toplam += arr[i] * agirlik[i];
  }
  return toplam;
}

function sigmoid(toplam) {
  return 1 / (1 + Math.exp(-toplam));
}

const top = sum([0.999, 0.0067], [1.1, 0.1]);

const sig = sigmoid(top);

console.log(sig);
console.log(top);
