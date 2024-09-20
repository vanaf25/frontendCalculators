export const validateForm = (input) => {
  const errors = {};
  let isValid = true;

  if (!input.email) {
    isValid = false;
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    isValid = false;
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.password) {
    isValid = false;
    errors.password = 'Password is required.';
  }

  if (input.confirmPw && input.password !== input.confirmPw) {
    isValid = false;
    errors.match = 'Passwords did not match.';
  }

  return { isValid, errors };
};
