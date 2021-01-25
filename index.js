function toplam(arr, agirlik) {
  let toplam = 0;
  for (let i = 0; i < arr.length; i++) {
    let ara = arr[i] * agirlik[i];
    toplam += ara;
  }

  return toplam;
}

const top = toplam([0.999, 0.0067], [1.1, 0.1]);

const sig = 1 / (1 + Math.exp(-top));

console.log(sig);
console.log(top);
