const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe ("caesar()", () => {
    describe("errors", () => {

        it ("should return false if shift amount is equal to 0", () => {
            const message = "hello world";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        
        it("should return false if shift is less than -25", () => {
            const message = "hello world";
            const shift = -26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        
        it("should return false if shift is greater than 25", () => {
            const message = "hello world";
            const shift = 26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });
    
    describe("encoding", () => {
        it("should leave spaces and other symbols as is", () => {
            const message = "hello world";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "khoor zruog";
            expect(actual).to.equal(expected);
        });

        it("should encode the message by shifting the letters", () => {
            const message = "hello";
            const shift = 3;
            const actual = caesar(message,shift);
            const expected = "khoor";
            expect(actual).to.equal(expected);
        });

        it("should ignore any capital letters", () => {
            const message = "HeLlO";
            const shift = 3;
            const actual = caesar(message,shift);
            const expected = "khoor";
            expect(actual).to.equal(expected);
        });

        it("should allow a negative shift to shift the letters to the left", () => {
            const message = "hello"
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "ebiil";
            expect(actual).to.equal(expected);
        });

        it ("should be able to appropriately handle letters towards the end of the alphabet", () => {
            const message = "zebra";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "wbyox";
            expect(actual).to.equal(expected);
        });
    });
    describe ("decoding", () => {
        it("should ignore capital letters", () => {
            const message = "KhOOr";
            const shift = 3;
            const actual = caesar(message, shift, encode = false);
            const expected = "hello"
            expect(actual).to.equal(expected);
        });
        it("should decode the entered message by shifting letters in opposite direction", () => {
            const message = "khoor";
            const shift = 3;
            const actual = caesar(message, shift, encode = false);
            const expected = "hello";
            expect(actual).to.equal(expected);
        });
        it ("should ignore spaces and other symbols, leave as is", () => {
            const message = "khoor zruog";
            const shift = 3;
            const actual = caesar(message, shift, encode = false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it ("should allow for a negative shift to the left",() => {
            const message = "ebiil tloia";
            const shift = -3;
            const actual = caesar(message, shift, encode = false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it ("should appropriately handle letters at the end of the alphabet", () => {
            const message = "zruog";
            const shift = 3;
            const actual = caesar(message, shift, encode = false);
            const expected = "world";
            expect(actual).to.equal(expected);
        });
    });
});
// Write your tests here!
//  For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should 
//  test that the following is true:
//  It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
//  It ignores capital letters. (For example, the results of A Message and a message should be the same.)
//  When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to 
//  the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
//  It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.