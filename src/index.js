import cipher from './cipher.js';

let word;
let offset;
const barValue = document.getElementById("bar");
const enter = document.getElementById("sendcode");
enter.addEventListener("click", function () {
    word = document.getElementById("code").value;
    //console.log(word);

    offset = parseInt(barValue.value);

    let wordEncode = cipher.encode(offset,word);
    console.log(wordEncode);
});

let word1;
const enterCode = document.getElementById("sendcodeout");
enterCode.addEventListener("click", function () {
    word1 = document.getElementById("code").value

    offset = parseInt(barValue.value);

    let wordDecode = cipher.decode(offset,word1);
    console.log(wordDecode);
    //console.log(word1);
    //console.log(offset);
});

// barValue.addEventListener("input", function(){
// offset = barValue.getElementById("bar").value
// console.log(offset)
// });