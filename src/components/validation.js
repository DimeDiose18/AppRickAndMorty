const validate = (userData) => {
  const { email, password } = userData;

  const errors = {};

  if (!email) {
    errors.email = "Empty email";
  } else if (email.length > 35) {
    errors.email = "Email cannot have more than 35 characters";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)) {
    errors.email = "Invalid email";
  }

  if (!password) {
    errors.password = "Empty password";
  } else if (password.length < 6 || password.length > 10) {
    errors.password = "Must have a length between 6 and 10 characters";
  } else if (!/\d/.test(password)) {
    errors.password = "Must have at least one number";
  }

  return errors;
};

export default validate;