export default {
  required: (value) => {
    return value != null && value !== '';
  },

  integer: (value) => {
    return value == null || value === '' || Number(value) === parseInt(value);
  },

  positive: (value) => {
    return value == null || value === '' || Number(value) > 0;
  },

  range: (value) => {
    return value == null || value === '' || (value.from == null && value.to == null) || Number(value.from) < Number(value.to);
  }
};