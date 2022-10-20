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
