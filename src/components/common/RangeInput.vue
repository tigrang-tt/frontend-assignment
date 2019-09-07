<template>
  <label class="form-control" :class="{ 'has-error': !valid }">
    <span v-if="title" class="form-control-title">{{ title }}</span>
    <input type="text" :value="displayValue" :placeholder="placeholder" @input="onInput" @focus="onFocus" @blur="onBlur" />
    <div v-if="!valid" class="form-control-error">{{ error }}</div>
  </label>
</template>

<script>
import Validators from 'Helpers/validation.helpers';
import input from './input.mixin';

export default {
  mixins: [
    input
  ],

  methods: {
    setModel(value) {
      let parts;

      if (!value || typeof(value) === 'string') {
        parts = (value || '').split('-');
      } else {
        parts = [value.from, value.to];
      }

      this.model = {
        from: parseFloat(parts[0]),
        to: parseFloat(parts[1])
      };

      if (isNaN(this.model.from)) {
        this.model.from = null;
      }
      if (isNaN(this.model.to)) {
        this.model.to = null;
      }
    },

    setDisplayValue(active) {
      const value = this.model || { from: null, to: null }

      if (active) {
        this.displayValue = `${value.from || ''} - ${value.to || ''}`;
      } else if (value.from == null && value.to == null) {
        this.displayValue = '';
      } else {
        this.displayValue = `${this.format(value.from)} - ${this.format(value.to)}`;
      }
    }
  },

  created() {
    this.rules.push(value => Validators.range(value) || 'Invalid range');
  }
};
</script>
