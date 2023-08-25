import cipher from "./cipher.js";

let word;
let offset;
const result = document.getElementById("resultado Encode");
const barValue = document.getElementById("bar");
const enter = document.getElementById("sendcode");
enter.addEventListener("click", function () {
  word = document.getElementById("code").value;

  offset = parseInt(barValue.value);

  const wordEncode = cipher.encode(offset, word);
  console.log(wordEncode);
  const resultEncode = " " + wordEncode;
  result.innerHTML = resultEncode;
});

const result1 = document.getElementById("resultado Decode");
let word1;
const enterCode = document.getElementById("sendcodeout");
enterCode.addEventListener("click", function () {
  word1 = document.getElementById("code").value;

  offset = parseInt(barValue.value);

  const wordDecode = cipher.decode(offset, word1);
  console.log(wordDecode);
  const resultDecode = " " + wordDecode;
  result1.innerHTML = resultDecode;
});
