<template>
  <div class="modal-wrapper">
    <div class="overlay"></div>
    <div class="modal">
      <h2>
        {{ title }}
        <div class="close right" @click="onClose"></div>
      </h2>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },

  methods: {
    onClose() {
      this.$emit('close');
    }
  },

  created() {
    this.$nextTick(() => {
      const slots = this.$scopedSlots;
      const refs = slots ? slots.default()[0].context.$refs : null;

      if (refs && refs.focus) {
        refs.focus.focus();
      }
    });
  }
};
</script>
