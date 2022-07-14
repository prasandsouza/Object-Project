let object = require("../object");
let mapProblem = require("../mapObject");

let callback = function (val, key) {
  return val + 5;
};
let result = mapProblem(object, callback);
console.log(result);
