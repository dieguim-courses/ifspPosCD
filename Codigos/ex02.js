let V1 = 11;
let V2 = 3;
let P = 0;
do {
  P = P + 1;
  V2 = V2 + 2;
  V1 = V1 - 1;
} while (V1 > V2);

console.log(V2, V1, P);
