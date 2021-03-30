const E1 = true;
const E2 = true;
const E3 = false;
const E4 = false;
const E5 = true;

if (E1 && E2) {
  console.log('comando1');
  if (E2 && E3) {
    console.log('comando2');
    console.log('comando3');
  } else console.log('comando4');
  if (E4 || E5) console.log('comando5');
  else {
    console.log('comando6');
  }
  console.log('comando7');
}
