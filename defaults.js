module.exports = function (object, defaultproperties) {
  if (typeof object === "object" && typeof defaultproperties === "object") {
    for (let key in defaultproperties) {
      if (key in object) {
        continue;
      } else {
        object[key] = defaultproperties[key];
      }
    }
    return object;
  } else {
    return {};
  }
};
