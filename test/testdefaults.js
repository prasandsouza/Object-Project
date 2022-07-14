let object = require("../object");
let defaultobject = require("../defaults");
let newdefault = require('../undefinedobject')

let result = defaultobject(object, newdefault);
console.log(result);
