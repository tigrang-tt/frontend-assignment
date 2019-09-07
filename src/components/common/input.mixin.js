export default {
  props: {
    value: null,
    title: String,
    placeholder: String,
    rules: {
      type: Array,
      default: () => []
    },
    format: {
      type: Function,
      default: value => value
    }
  },

  data: function () {
    return {
      model: '',
      displayValue: '',
      touched: false,
      valid: true,
      error: null,
      focused: false
    }
  },

  watch: {
    value(value) {
      this.model = value;
      this.setDisplayValue(this.focused);
    }
  },

  methods: {
    validate() {
      return this.rules.every(rule => {
        const valid = rule(this.model);

        if (valid === true) {
          this.error = null;
          this.valid = true;
        } else {
          this.error = valid;
          this.valid = false;
        }

        return this.valid;
      });
    },

    focus() {
      this.$refs.input.focus();
    },

    onInput(event) {
      const value = event.target.value;

      this.setModel(event.target.value);
      this.setDisplayValue(true, value);
      this.$emit('input', this.model);

      if (this.touched) {
        this.validate();
      }
    },

    onFocus() {
      this.focused = true;

      this.setDisplayValue(true);
      this.$emit('focus');
    },

    onBlur() {
      this.focused = false;

      if (!this.touched) {
        this.touched = true;
      }

      if (this.validate()) {
        this.setDisplayValue(false);
      }

      this.$emit('blur');
    },

    setModel(value) {
      this.model = value;
    },

    setDisplayValue(active, value = this.model) {
      if (active) {
        this.displayValue = value;
      } else {
        this.displayValue = this.format(value);
      }
    }
  },

  mounted() {
    this.setModel(this.value);
    this.setDisplayValue(this.focused);
  }
}