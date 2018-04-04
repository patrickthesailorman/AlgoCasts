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
  const reversed = n.toString().split('').reverse().join('');
   
      return parseInt(reversed) * Math.sign(n);
}



module.exports = reverseInt;

// function reverseInt(n) {
//   return parseInt( n.toString().split('').reverse().join('')) * Math.sign(n);
// }

// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   if ( n < 0 ) {
//       return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

// function reverseInt(n) {
//     var num = [];
//     Math.sign(n);
//     if (Math.sign(n) === 1) {
//         n = n.toString().split('');
//         for (var i = 0; i < n.length; i++) {
//             if ( i > 0 ) {
//                 num.push(i);
//             }
//         }
//             return parseInt(num.toString().split('').reverse().join(''));
//         } else {
//             n = n.toString().split('');
//             for (var i = 1; i < n.length; i++) {
//             if ( i > 0 ) {
//                 num.push(i);
//             }
//         }
//         return "-" + parseInt(num.toString().split('').reverse().join(''));
//     }
// }