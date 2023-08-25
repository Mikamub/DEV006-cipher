const cipher = {   // El objeto "cipher" contiene dos funciones: "encode" para cifrar y "decode" para descifrar.

  encode: function (offset,word) {  // La función "encode" recibe dos parámetros: "offset" (número de desplazamiento) y "word" (palabra a cifrar).
    // Si "offset" es nulo o "word" está vacía, se lanzará un error con un mensaje.

    if(offset === null || word ==="")
    {
      throw TypeError('La funcion debe recibir numeros y palabras');
    }
    let wordFinalEncode = "";  // Se crea una variable "wordFinalEncode" para almacenar la palabra cifrada.
    for (let i = 0; i < word.length; i++) {  // Se inicia un bucle que recorre cada carácter de la palabra "word".
      const letterToNumber = parseInt(word.charCodeAt(i));    // Se obtiene el valor numérico del carácter actual en la posición "i".
      let numberOffset = letterToNumber + offset; // Se calcula el nuevo valor numérico sumando el desplazamiento "offset".
      if (numberOffset > 90) {   // Si el nuevo valor numérico supera el código ASCII de la letra 'Z' (90),
        // significa que se ha desplazado más allá del final del alfabeto en mayúsculas.
        const resta = numberOffset - 65; // Se calcula la diferencia entre el nuevo valor y el código ASCII de la letra 'A' (65).
        const residuo = resta % 26; // Se calcula el residuo de la diferencia al dividir entre 26, ya que hay 26 letras en el alfabeto.
        numberOffset = residuo + 65; // El nuevo valor numérico se ajusta para que vuelva a estar dentro del rango de letras mayúsculas.
      }
      const encodeLetter = String.fromCharCode(numberOffset);// Se convierte el valor numérico cifrado nuevamente a su carácter correspondiente.
      wordFinalEncode += encodeLetter; // Se agrega el carácter cifrado a la variable "wordFinalEncode".
    }
    return wordFinalEncode;
    // Se retorna la palabra cifrada.
  },
  decode: function (offset,word1) {// La función "decode" recibe dos parámetros: "offset" (número de desplazamiento) y "word1" (palabra a descifrar).
    // Si "offset" es nulo o "word1" está vacía, se lanzará un error con un mensaje.
    if(offset === null || word1 === "")
    {
      throw TypeError('La funcion debe recibir numeros y palabras');
    }
    let wordFinalDecode = "";  // Se crea una variable "wordFinalDecode" para almacenar la palabra descifrada.
    for (let a = 0; a < word1.length; a++) { // Se inicia un bucle que recorre cada carácter de la palabra "word1".
      const codeToNumber = parseInt(word1.charCodeAt(a));  // Se obtiene el valor numérico del carácter actual en la posición "a".
      let restaOffset = codeToNumber - offset // Se calcula el nuevo valor numérico restando el desplazamiento "offset".
      if (restaOffset < 65) { // Si el nuevo valor numérico es menor que el código ASCII de la letra 'A' (65),
        // significa que se ha desplazado más allá del inicio del alfabeto en mayúsculas.
        const resta90 = 90 - restaOffset // Se calcula la diferencia entre el código ASCII de la letra 'Z' (90) y el nuevo valor numérico.
        const residuo = resta90 % 26  // Se calcula el residuo de la diferencia al dividir entre 26, ya que hay 26 letras en el alfabeto.
        restaOffset = 90 - residuo // El nuevo valor numérico se ajusta para que vuelva a estar dentro del rango de letras mayúsculas.
      }
      
      const decodeLetter = String.fromCharCode(restaOffset);  // Se convierte el valor numérico descifrado nuevamente a su carácter correspondiente.
      wordFinalDecode += decodeLetter  // Se agrega el carácter descifrado a la variable "wordFinalDecode".
    }
    return wordFinalDecode;  // Se retorna la palabra descifrada.
  }
};


export default cipher;
