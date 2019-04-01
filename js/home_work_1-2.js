
var str = " 'Какой' - то 'текст', I'll be back. ";

var replace = str.replace(/\'(\S*)\'/g, '\"$1\"');

console.log(replace);





