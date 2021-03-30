let M = [];
M[0] = [19, 3, 1];
M[1] = [13, 7, 17];
M[2] = [5, 11, 23];

console.log('M inicial = ', M);

let aux = M[2][2];
let j = 0;
for (let i = 2; i >= 0; i--) {
  if (aux > M[i][j]) {
    aux = M[i][j];
  }
  j++;
}
for (let i = 0; i < 3; i++) {
  M[i][i] = aux * M[i][i];
}

console.log('M final = ', M);
