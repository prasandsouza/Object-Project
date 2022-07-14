module.exports = function (object, callback) {
  if (typeof object === "object") {
    for (let key in object) {
      object[key] = callback(object[key]);
    }
    return object;
  }
  return {};
};
