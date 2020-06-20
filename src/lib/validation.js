export const validationLogin = (email, pass) => {
  if (email === '' || pass === '') {
    return false;
  }
  return true;
};

export const validationPassLength = (pass) => {
  if (pass.length < 6) {
    return false;
  }
  return true;
};
