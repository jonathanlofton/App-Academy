function caesarCipher(str, shift) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("")

  let answer = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      answer += " ";
    } else {
      let firstIDX = alpha.indexOf(str[i]);
      let lastIDX = (firstIDX + shift) % alpha.length;
      answer += alpha[lastIDX];
    }
  }

  return answer;
}


console.log(caesarCipher("aaa", 1)); // bbb
console.log(caesarCipher("abc xyz", 3)); // def abc
console.log(caesarCipher("the bear", 3)); // wkh ehdu
