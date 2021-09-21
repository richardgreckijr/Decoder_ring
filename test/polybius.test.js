// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("polybius()", () => {
    describe("encoding", () => {
        it ("should encode 'i' and 'j' to 42", () => {
            const message = "jacuzzi";
            const actual = polybius(message);
            const expected = "42113154555542";
            expect(actual).to.equal(expected);
        });
        
        it("should encode the message by translating the input into number pairs", () =>{
            const message = "hello";
            const actual = polybius(message);
            const expected = "3251131343";
            expect(actual).to.equal(expected);
        });
        it("should ignore/leave spaces as entered", () => {
            const message = "hello world";
            const actual = polybius(message);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        
        it("should decode 42 to both 'i' and 'j' ", () => {
            const message = "42113154555542";
            const actual = polybius(message, false);
            const expected = "i/jacuzzi/j";
            expect(actual).to.equal(expected);
        });
        
        
        it("should decode the message by translating each pair of numbers into a letter", () => {
            const message = "3251131343";
            const actual = polybius(message, false);
            const expected = "hello";
            expect(actual).to.equal(expected);
        });
        it("should ignore/leave spaces as entered", () => {
            const message = "3251131343 2543241341";
            const actual = polybius(message, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });

        it("should return false if input length of all number is odd(excluding spaces)", () => {
            const message = "hi mom";
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
        
    });
});
