export default {
  currency: (value) => {
    if (!value) {
      return '';
    }

    return `$${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  }
};