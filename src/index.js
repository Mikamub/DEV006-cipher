import cipher from './cipher.js';

let word;
let offset;
const result = document.getElementById("resultado Encode");
const barValue = document.getElementById("bar");
const enter = document.getElementById("sendcode");
enter.addEventListener("click", function () {
    word = document.getElementById("code").value;
    //console.log(word);

    offset = parseInt(barValue.value);

    let wordEncode = cipher.encode(offset,word);
    console.log(wordEncode);
    let resultEncode =  " " + wordEncode;
    result.innerHTML=resultEncode;
});


const result1 = document.getElementById("resultado Decode");
let word1;
const enterCode = document.getElementById("sendcodeout");
enterCode.addEventListener("click", function () {
    word1 = document.getElementById("code").value

    offset = parseInt(barValue.value);

    let wordDecode = cipher.decode(offset,word1);
    console.log(wordDecode);
    let resultDecode =  " " + wordDecode;
    result1.innerHTML=resultDecode;
    //console.log(word1);
    //console.log(offset);
});