const keysToLowerCase = (object) => {
  const objectKeysLowerCase = Object.keys(object).reduce((destination, key) => {
    destination[key.toLowerCase()] = object[key];
    return destination;
  }, {});

  return objectKeysLowerCase;
};

export default keysToLowerCase;
