// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var num = [];
    Math.sign(n);
    if (Math.sign(n) === 1) {
        n = n.toString().split('');
        for (var i = 0; i < n.length; i++) {
            if ( i > 0 ) {
                num.push(i);
            }
        }
            return parseInt(num.reverse().join(''));
        } else {
            n = n.toString().split('');
            for (var i = 1; i < n.length; i++) {
            if ( i > 0 ) {
                num.push(i);
            }
        }
        return n[0] + parseInt(num.reverse().join(''));
    }
}

module.exports = reverseInt;
