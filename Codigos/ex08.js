let n,
  c = 0,
  i = 2;

n = 6;
while (i <= n - 1) {
  // console.log('i = ', i);
  // console.log('n % i = ', n % i);
  if (n % i === 0) {
    c++;
  }
  i++;
}
if (c === 0) {
  console.log('atende');
} else {
  console.log(`${c} atende`);
}
