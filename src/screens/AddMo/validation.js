export const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.product) {
    errors.product = 'Required';
  }
  if (!values.qty) {
    errors.qty = 'Required';
  }
  if (!values.date_planned_start) {
    errors.date_planned_start = 'Required';
  }
  if (!values.origin) {
    errors.origin = 'Required';
  }
  if (!values.responsible) {
    errors.responsible = 'Required';
  }
  return errors;
};