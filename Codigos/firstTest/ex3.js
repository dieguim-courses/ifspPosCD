let M = [];
M[0] = [19, 3, 1];
M[1] = [13, 7, 17];
M[2] = [5, 11, 23];

console.log(M);

let aux = M[0][0];
for (let i = 0; i < 3; i++) {
  if (aux > M[i][i]) {
    aux = M[i][i];
  }
}

let j = 0;
for (let i = 2; i >= 0; i--) {
  M[i][j] = aux * M[j][i];
  j++;
}

console.log(M);
