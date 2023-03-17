const cipher = {
  
  encode: function(word,offset){
    //console.log(word,offset);
    let wordFinal = "";
    for (let i= 0; i<word.length; i++)
    {
     let letterToNumber = parseInt(word.charCodeAt(i));
     let numberOffset = letterToNumber + offset;
     if(numberOffset>90) {
      let resta = numberOffset - 65;
      let residuo = resta%26;
      numberOffset = residuo + 65;
     }
     //console.log(numberOffset);
     let encodeLetter = String.fromCharCode(numberOffset); 
     //console.log(encodeLetter);
      wordFinal += encodeLetter;
    }
    return wordFinal;
    },
    decode: function(word1,offset){
      console.log(word1);
      console.log(offset);
    }   
};


export default cipher;
