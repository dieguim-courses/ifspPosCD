console.log('Template para desenvolvimento dos códigos');
console.log('Execução: npm start <script>.js');

x = [];

for (let i = 0; i < 3; i++) {
  x[i] = [];
  for (let j = 0; j < 3; j++) {
    x[i][j] = i + j;
  }
}

console.log('X = ', x);
