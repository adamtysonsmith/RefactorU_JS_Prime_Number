var isInteger = function(n) {
    return n % 1 === 0;
}

function optimusPrime(n) {
    var prime = true;
    
    for (var i = 2; i < n; i++) {
        var dividend = n / i;
        if (isInteger(dividend)) {
            prime = false;
        }
    }
    
    if (n === 1) {
        console.log('1 is NOT a prime number!');
    } else if (prime === true) {
        console.log(n + ' is a prime number!');
    } else {
        console.log(n + ' is NOT a prime number!');
    }
}