const repeatString = function(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result += x
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
