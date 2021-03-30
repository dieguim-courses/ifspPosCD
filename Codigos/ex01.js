const X = true;
const Y = false;
const K = true;
const W = false;
const Z = false;

const Flag = (X && Y) || (K && W) || Z;

console.log('Flag = ', Flag);
