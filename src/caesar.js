// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//  For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should 
//  test that the following is true:
//  It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
//  It ignores capital letters. (For example, the results of A Message and a message should be the same.)
//  When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to 
//  the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
//  It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.


// you can add any code you want within this function scope

// if shift is === 0 || shift < -25 || shift > 25 || null || undefined;
// if character is a z, should loop back to start of alphabet(ie. z shift once to right)
// if character is not alphabetic, do not change.
//  write requirements. understand req. pseudo-code based off research. check logic. 
//  check req vs pseudo code. FIND(), SWITCH STATEMENT?

const caesarModule = function caesar(input, shift, encode = true) {

  // convert all entries into lowercase
  input = input.toLowerCase();

  // wrapping thru the alphabet if index goes past "z" 
  if (shift < 0){
    return caesarModule(input, shift + 26, encode = true);
  }

  // result variable
  let result = "";

  // loop thru input.length
  for (let i=0; i < input.length; i++){

    // variable to hold input's index
    let regular = input[i];

    // using the match method we compare "regular" to a regex expression; \w will match any single alphanumeric character
    if (regular.match(/\w/i)){

      // variable that holds conversion of the input into ASCII character encoding
      let anon = input.charCodeAt(i);

      // if input is greater than ("a") and less than ("z")
       if (anon >= 97 && anon <= 122){

         // convert into string, reduce down to equal to shift, modulo 26 to wrap around , readding 97 to return correct shift
        regular = String.fromCharCode(((anon - 97 + shift) % 26) + 97);

      }
    }

    // add data to return statement
    result += regular;
  }

  // return to user
  console.log(result)
  return result;
  
}

module.exports = { caesar: caesarModule.caesar };


