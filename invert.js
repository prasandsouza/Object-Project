module.exports = function (object) {
  if (typeof object === "object") {
    let revertobject = {};
    for (let key in object) {
      revertobject[object[key]] = key;
    }
    return revertobject;
  }
  return {};
};
