const validate = ({ email, password, confirmpassword }) => {
  const errors = {};
  let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  if (!email) errors.email = 'email is required';
  else if (!reg.test(email)) errors.email = 'email is invalid';

  if (!password) errors.password = 'password is a required field';
  else if (password.length < 6) errors.password = 'password is too short';

  if (!confirmpassword) errors.confirmpassword = 'confirm password is required';
  else if (confirmpassword !== password)
    errors.confirmpassword = 'Password mismatched';

  return errors;
};

export default validate;
