export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.passBOMrd) {
    errors.passBOMrd = 'Required';
  }
  return errors;
};

export const validateRegister = values => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Required';
  }
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.passBOMrd) {
    errors.passBOMrd = 'Required';
  }
  if (!values.passBOMrd_confirmation) {
    errors.passBOMrd_confirmation = 'Required';
  } else if (values.passBOMrd_confirmation !== values.passBOMrd) {
    errors.passBOMrd_confirmation = "Didn't Match";
  }
  if (!values.phone_number) {
    errors.phone_number = 'Required';
  }

  return errors;
};
