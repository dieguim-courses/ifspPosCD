let n, i, ant1, ant2, prox;

n = 10;
ant1 = 1;
ant2 = 1;
console.log(ant1);
console.log(ant2);
i = 3;

while (i <= n) {
  prox = ant1 + ant2;
  console.log(prox);
  ant2 = ant1;
  ant1 = prox;
  i = i + 1;
}
