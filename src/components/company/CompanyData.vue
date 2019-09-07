<template>
  <form class="round-bordered pad-content">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <TextInput
      v-model="formData.companyName"
      title="Company Name" placeholder="e.g. Your Company Name"
      :rules="rules.companyName"
    />
    <NumberInput
      v-model="formData.companySpend"
      title="Company Spend" placeholder="e.g. $150,000"
      :rules="rules.companySpend" :format="format.companySpend"
    />
    <RangeInput
      v-model="formData.companySpendAbility"
      title="Company Spend Ability" placeholder="e.g. $150,000 - $330,000"
      :format="format.companySpendAbility"
    />
    <NotesInput v-model="formData.notes" title="Notes" placeholder="e.g. Good Tech Company" @focus="onNotesFocus" />

    <Modal v-if="additionalNotesOpen" title="Additional Notes" @close="onCloseAdditionalNotes">
      <NotesInput ref="focus" v-model="additionalNotes" placeholder="e.g. Good Tech Company" />
      <button type="button" class="right" @click="onSaveAdditionalNotes">Save</button>
    </Modal>
  </form>
</template>

<script>
import TextInput from 'Components/common/TextInput.vue';
import NumberInput from 'Components/common/NumberInput.vue';
import RangeInput from 'Components/common/RangeInput.vue';
import NotesInput from 'Components/common/NotesInput.vue';
import Modal from 'Components/common/Modal.vue';

import Validators from 'Helpers/validation.helpers';
import Format from 'Helpers/format.helpers';

import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapMutations } = createNamespacedHelpers('companyData');

export default {
  components: {
    TextInput,
    NumberInput,
    RangeInput,
    NotesInput,
    Modal
  },

  data: () => ({
    formData: {
      companyName: '',
      companySpend: '',
      companySpendAbility: '',
      notes: ''
    },

    additionalNotes: '',
    additionalNotesOpen: false,

    rules: {
      companyName: [
        value => Validators.required(value) || "Company name is required"
      ],
      companySpend: [
        value => Validators.integer(value) || "Invalid value",
        value => Validators.positive(value) || "Value should be a positive number"
      ]
    },

    format: {
      companySpend: Format.currency,
      companySpendAbility: Format.currency
    }
  }),

  computed: {
    ...mapGetters({
      storedData: 'data'
    })
  },

  methods: {
    ...mapMutations({
      updateStoredData: 'updateState'
    }),

    onNotesFocus() {
      this.additionalNotes = this.formData.notes;
      this.additionalNotesOpen = true;
    },

    onSaveAdditionalNotes() {
      this.$set(this.formData, 'notes', this.additionalNotes);
      this.additionalNotesOpen = false;
    },

    onCloseAdditionalNotes() {
      this.additionalNotesOpen = false;
    }
  },

  created() {
    this.formData = this.storedData;
  },

  beforeRouteLeave: function(to, from, next) {
    this.updateStoredData(this.formData);

    next();
  }
};
</script>
