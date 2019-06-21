const validator = require("validator");
const isEmpty = require("is-empty");

function validateLoginInput(data) {
  let errors = {};
  // Convert empty fields to "" for validator function
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateLoginInput;
