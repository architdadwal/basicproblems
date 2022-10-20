//reverse a string
// str = jameson

function reverse(str) {
  return str.split("").reverse().join();
}

const sol = reverse("jameson");
console.log(sol);
// removing first and last letter of a string
//Thre are various meathods
//Im using slice() meathod

function removeChar(str) {
  return str.slice(1, -1);
}

//bullets and dragons solution
// Each dragon takes two bullets
// True, False tells about survival of hunter
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

//Multiplication by 8
// we need to check if number is even we have to multiply it by 8 else by 9

function simpleMultiplication(num) {
  return num * (num % 2 ? 9 : 8);
}
