const reverseString = function(string) {
    array = Array.from(string)
    array.reverse();
    let final = "";
    for (let i = 0; i < array.length; i++) {
        final += array[i]
    }

    return final

};

// Do not edit below this line
module.exports = reverseString;
