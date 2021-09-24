const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe ("substituion()", () => {
    describe("error handling", () => {
        it ("should return false if the substitution alphabet argument is missing", () =>{
                const message = "message";
                const actual = substitution(message);
                expect(actual).to.be.false;
            });
            it ("should return false if substituion alphabet arugment does not contain unique characters", () =>{
                const message = "message";
                const alphabet = "thismessageisonlyletters"
                const actual = substitution(message);
                expect(actual).to.be.false;
            });
            it ("should return false if the substitution alphabet is not exactly equal to 26 characters", () =>{
                const message = "message";
                const alphabet = "thisistooshort"
                const actual = substitution(message);
                expect(actual).to.be.false;
            });
    });
    describe("encoding", () => {
        it ("should encode the message by using the substitution alphabet provided by the user", () =>{
                const message = "message";
                const alphabet = "plmoknijbuhvygctfxrdzeswaq";
                const actual = substitution(message, alphabet);
                const expected = "ykrrpik";
                expect(actual).to.equal(expected);
            });
            it ("should preserve all spaces", () =>{
                const message = "my message";
                const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
                const actual = substitution(message, alphabet);
                const expected = "yp ysii.rs";
                expect(actual).to.equal(expected);
            });
            it ("should work with any kind of alphabet including special characters", () =>{
                const message = "message";
                const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
                const actual = substitution(message, alphabet);
                const expected = "ysii.rs";
                expect(actual).to.equal(expected);
            });
        });
        describe("decoding", () => {
            it ("should decode the message by using the substitution alphabet provided by the user", () =>{
                    const message = "ykrrpik";
                    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
                    const actual = substitution(message, alphabet, false);
                    const expected = "message";
                    expect(actual).to.equal(expected);
                });
                it ("should preserve all spaces", () =>{
                    const message = "yp ysii.rs";
                    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
                    const actual = substitution(message, alphabet, false);
                    const expected = "my message";
                    expect(actual).to.equal(expected);
                });
                it ("should work with any kind of alphabet including special characters", () =>{
                    const message = "ysii.rs";
                    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
                    const actual = substitution(message, alphabet, false);
                    const expected = "message";
                    expect(actual).to.equal(expected);
                });
            });
});