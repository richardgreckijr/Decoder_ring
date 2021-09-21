// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    // conditional, if encode is false and the input length is odd(ignoring spaces)
   if (!encode && input.replace(" ", "").length % 2 >0) {
     return false;
   }
    // to ignore capital letters
    input = input.toLowerCase();
    // two object to hold the encode and decode sections of the polybius cipher
    const encoded = {'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 
    'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'};
    const decoded = {'11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', 
    '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
    // condiontal, if it is not encoded, use the decoded object; else use encoded onbject
    let choice = !encode ? decoded : encoded; 
    // regex exp. checks for numeric & two digits(polybius location), alphabet, any spaces, and to find all matches that do so.
    let regex = /[0-9]{2}|[a-z]|\s/g;
    // return statement; matches input to the regex expression, 
    // then maps over choice based on if it is decoded or encoded; returns a number or
    // a phrase. returns in a string.
    return input.match(regex)
    .map(char => choice[char]|| char).join('');
  
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

polybiusModule.polybius("apple", encode = true);
polybiusModule.polybius("apple", encode = false);

// For the Polybius square 
// (example: polybius("message") => "23513434112251"), 
// the tests that you write should test that the following is true:

// When encoding, it translates the letters i and j to 42.

// When decoding, it translates 42 to (i/j).

// It ignores capital letters. 
// (For example, the results of A Message and a message should be the same.)

// It maintains spaces in the message, before and after encoding or decoding.