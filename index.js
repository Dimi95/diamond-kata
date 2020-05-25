const { diamond, edge} = require("./lib/diamond2");

const character = process.argv[2];
console.log(edge(character).join('\n'))
