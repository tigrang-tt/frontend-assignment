<template>
  <label class="form-control" :class="{ 'has-error': !valid }">
    <span v-if="title" class="form-control-title">{{ title }}</span>
    <input type="text" :value="displayValue" :placeholder="placeholder" @input="onInput" @focus="onFocus" @blur="onBlur" />
    <div v-if="!valid" class="form-control-error">{{ error }}</div>
  </label>
</template>

<script>
import input from './input.mixin';

export default {
  mixins: [
    input
  ],

  methods: {
    setModel(value) {
      this.model = parseFloat(value);

      if (isNaN(this.model)) {
        this.model = null;
      }
    }
  }
};
</script>
