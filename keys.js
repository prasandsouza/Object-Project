module.exports = function (object) {
  if (typeof object === "object") {
    let Stringkey = [];
    for (let items in object) {
      Stringkey.push(items);
    }
    return Stringkey;
  } else {
    return {};
  }
};
