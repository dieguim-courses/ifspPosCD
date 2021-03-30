let a, i, j;

a = 0;
for (i = 1; i <= 4; i++) {
  j = 1;
  while (j < 3) {
    a = a + 2;
    j = j + 1;
  }
}
console.log(a);
