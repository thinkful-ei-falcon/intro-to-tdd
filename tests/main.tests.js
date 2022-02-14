const expect = require('chai').expect;
const addNums = require('../src/main');

describe('addNums()', ()=>{
    let arr =[1,2,3];
    it('should return the sum of two numbers',()=>{
        let actual = addNums(5,7);
        let expected = 12;
        expect(actual).to.equal(expected);
    });
    it('should notify the user if the input is invalid',()=>{
        let actual = addNums();
        let expected = "Invalid Input";
        expect(actual).to.equal(expected);
    })
    it('should return the sum of stringified numbers',()=>{
        let actual = addNums('5', '6');
        let expected = 11;
        expect(actual).to.equal(expected);
    })
    it('should return an error object if zero is the sum',()=>{
        let expected = {error:"Sum is zero!"};
        let actual = addNums(0,0);
        expect(actual).to.eql(expected);
    })

    it('should look at array',()=>{
        expect(arr).to.eql([])
    })
});

/*
// As a user, I should be able to pass in 2 numbers and get the sum
function testSumOfNums() {
    let result = addNums(5, 6);
    let actual = 11;
    console.log(result === actual);
}
testSumOfNums();
// As a user, I should be able to pass in 2 numbers as strings and get the sum
function testStringNums() {
    let result = addNums('5', '6');
    let actual = 11;
    console.log(result === actual);
}
testStringNums();
// As a user, I should be notified if my input is not valid
function testInvalidInput() {
    let result = addNums();
    let actual = 'Invalid Input';
    console.log(result === actual);
}
testInvalidInput();*/