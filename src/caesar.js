// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift, encode = true) {
    // converts input to lowerCase; result variable to return to user
    let text = input.toLowerCase();
    let result = "";
    
    //  condtional to check if no shift is entered, if shift is greater than 25, less than -25, or equaled to zero; return false
    if (!shift || shift > 25 || shift < -25 || shift === 0){
    return false;
  }

  // inverted shift when decoding message
  if (encode === false) shift *= -1;

    // loop thru text.length
    for (let i=0; i < text.length; i++) {
      let regular = input[i];
      
      if (regular.match(/\w/)) {
        // using the match method we compare "regular" to a regex expression; \w will match any single alphanumeric character
      
        // variable that holds conversion of the input into ASCII character encoding
        let anon = text.charCodeAt(i) + shift;
      
        if(anon > 122){
          anon = anon - 26;
        }
        if(anon < 97){
          anon = anon + 26;
        }
        let letter = String.fromCharCode(anon);
        result += letter;
      } else {
        result += regular;
      }
    }
    console.log(result);
    return result;
  }
        
  // return to user

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };





