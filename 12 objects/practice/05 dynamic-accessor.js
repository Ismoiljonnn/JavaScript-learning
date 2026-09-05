const getProperty = (obj, key) => {
  return key in obj ? obj[key] : "topilmadi";
};

module.exports = getProperty;
