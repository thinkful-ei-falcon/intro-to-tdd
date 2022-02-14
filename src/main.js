function addNums(a, b) {
    let sum = Number(a) + Number(b);

    if(sum===0){
        return {error:"Sum is zero!"}
    }

    return sum ? sum : 'Invalid Input'
}

module.exports = addNums;
