
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    
    input = input.toLowerCase(); // return all input to lowerCase

    let ogAlphabet = "abcdefghijklmnopqrstuvwxyz ";

    let result = ""; // return statement
  
    let doesRepeat = /(.).*\1/.test(alphabet);// uses a regex expression to check if any duplicates in alphabet;

    if (!alphabet || alphabet.length !== 26) return false;// checks if user entered a alphabet, enforces 26 charLength on alphabet;

    if (doesRepeat) return false; // if any duplicates return false

    if(encode){
      for(let i=0; i < input.length; i++){
        for(let j=0; j < ogAlphabet.length; j++){   // loops over argument, and compares to traditional alphabet;
          if (input.charAt(i) === " "){
            result += " ";
      }   if (input.charAt(i) === ogAlphabet.charAt(j)){ // when any matches are found, pushes encoded index into return statement;
            result += alphabet.charAt(j); 
      }
    }
  }
  
}

if (!encode){
  for(let i=0; i < input.length; i++){
    for(let j=0; j < ogAlphabet.length; j++){ 
      if (input.charAt(i) === " "){
        result += " ";
      } if(input.charAt(i) === alphabet.charAt(j)){   // same process as above, except pushes index of traditional alphabet;
          result += ogAlphabet.charAt(j);
        
      }
      
    }
  }
}  return result.replace(/  +/g, ' ');  // return statement, replaces any extra spacing added when looping thru input; 

  }
  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
