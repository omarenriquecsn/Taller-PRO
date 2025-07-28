export const validate = (input) => {
  let errors = {};
  if (input.name) {
    errors = {
      email: "Email is required",
      birthdate: "Birthdate is required",
      nDni: "nDni is required",
      username: "Username is required",
      password: "Password is required",
    };
    if (input.email) {
      errors = {
        birthdate: "Birthdate is required",
        nDni: "nDni is required",
        username: "Username is required",
        password: "Password is required",
      };
      if (input.birthdate) {
        errors = {
          nDni: "nDni is required",
          username: "Username is required",
          password: "Password is required",
        };
        if (input.nDni) {
          errors = {
            username: "Username is required",
            password: "Password is required",
          };
          if (input.username) {
            errors = { password: "Password is required" };
            if (input.password) {
              errors = {};
            }
          }
        }
      }
    }
  }

  return errors;
};

export const validateLogin = (input) => {
  let errors = {};
  if (input.username) {
    errors = { password: "Password is required" };
    if (input.password) {
      errors = {};
    }
  }
  return errors;
};
