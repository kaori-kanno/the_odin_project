const removeFromArray = function(arg1 = 'default1', ...otherArgs) {
    for (let j = 0; j < otherArgs.length; j++){

        for (let i = arg1.length - 1; i >= 0; i--) {
            if (arg1[i] === otherArgs[j]) {
                arg1.splice(i, 1)
            }
        }
        
    }
    return arg1
};

// Do not edit below this line
module.exports = removeFromArray;
