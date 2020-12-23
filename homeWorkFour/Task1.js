// Task 1
function perform(number, callback) {
    return {
        then: (a, b, func) => Promise.resolve(func (a, b, callback(number)))
    }
}
perform(20, function(value) {
    console.log(value) // 20
    let param = 1;
    console.log(param); // 1
    return param;
})
    .then('a', 'b', function(a, b, param) {
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    });


