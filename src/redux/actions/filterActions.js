const { TOGGLE_BRAND, TOGGLE_STOCK } = require("../actionTypes/actionTypes");

exports.toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
exports.toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
