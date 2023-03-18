const cipher = {

  encode: function (offset,word) {
    //console.log(word,offset);
    if(offset==null || word=="")
    {
      throw TypeError('La funcion debe recibir numeros y palabras');
    }
    let wordFinalEncode = "";
    for (let i = 0; i < word.length; i++) {
      let letterToNumber = parseInt(word.charCodeAt(i));
      let numberOffset = letterToNumber + offset;
      if (numberOffset > 90) {
        let resta = numberOffset - 65;
        let residuo = resta % 26;
        numberOffset = residuo + 65;
      }
      //console.log(numberOffset);
      let encodeLetter = String.fromCharCode(numberOffset);
      //console.log(encodeLetter);
      wordFinalEncode += encodeLetter;
    }
    return wordFinalEncode;
  },
  decode: function (offset,word1) {
    //console.log(word1);
    // console.log(offset);
    if(offset==null || word1=="")
    {
      throw TypeError('La funcion debe recibir numeros y palabras');
    }
    let wordFinalDecode = "";
    for (let a = 0; a < word1.length; a++) {
      let codeToNumber = parseInt(word1.charCodeAt(a));
      let restaOffset = codeToNumber - offset
      if (restaOffset < 65) {
        let resta90 = 90 - restaOffset
        let residuo = resta90 % 26
        restaOffset = 90 - residuo
        //console.log(restaOffset)
      }
      let decodeLetter = String.fromCharCode(restaOffset);
      wordFinalDecode += decodeLetter
    }
    return wordFinalDecode;
  }
};


export default cipher;
