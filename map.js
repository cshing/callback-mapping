var words = ["ground", "control", "to", "major", "tom"];


function map(collection, runCallback) {
    var result = []

    for (var i = 0; i < collection.length; i++) {
        var item = collection[i];
        result.push(runCallback(item));
    }

    /* Using forEach instead of for loop

    collection.forEach(function(item) {
        result.push(runCallback(item));
    });      */

    return result;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
    return word.split('').reverse().join('');
});




console.log(map(words, function(word) {
    return word.length;
  }));

console.log(map(words, function(word) {
    return word.toUpperCase();
  }));

console.log(map(words, function(word) {
    return word.split('').reverse().join('');
  }));




/* WANT RESULTS TO BE:

console.log(map(words, function(word) {
  return word.length;
}));

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/