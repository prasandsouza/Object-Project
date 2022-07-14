module.exports = function (object) {
  if (typeof object === "object") {
    let pairs = [];
    for (let key in object) {
      let value = object[key];
      pairs.push([key, value]);
    }
    return pairs;
  }
  return {};
};
