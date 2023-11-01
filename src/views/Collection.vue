<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="reportCollection">
    <label> Select Collection Type
      <select v-model="selected">
        <option v-for="(option, index) in options" :value="option" :key="index">
          {{ option.label }}
        </option>
      </select>
    </label>

    <div v-if="selected !== ''">
      <CustomInput :data="getLabel('apt')" @inputChanged="getUpdatedAmount"/>
      <CustomInput :data="getLabel('amount')" @inputChanged="getUpdatedAmount"/>
      <CustomInput v-if="selected.type === 'general'"
        :data="getLabel('specifyDetails')"
        @inputChanged="getUpdatedAmount" />

      <button @click="addClicked()">Add</button>
    </div>

    <CustomToast ref="toast" />

  </div>
</template>

<script>
import CustomInput from '../components/_shared/CustomInput.vue';
import CustomToast from '../components/_shared/CustomToast.vue';
import { getInputLabels, COLLECTION_OPTIONS } from '../utils/utils';

export default {
  name: 'ReportCollection',
  components: { CustomInput, CustomToast },
  data() {
    return {
      selected: '',
      amount: '',
      apt: '',
      details: '',
      toastDetails: {
        message: '',
        type: '',
      },
      options: COLLECTION_OPTIONS,
    };
  },
  methods: {
    getUpdatedAmount(payload) {
      this[payload.key] = payload.value;
    },
    getLabel(payload) {
      return getInputLabels(payload);
    },
    addClicked() {
      if (!this.validate()) {
        this.$refs.toast.showToast('Please fill all values', 'error');
        return;
      }
      this.$refs.toast.showToast('Added', 'success');
      const payload = this.constructPayload();
      console.log('Add Clicked: ', payload);
    },
    validate() {
      return !!this.amount && !!this.apt && (this.selected.type === 'general' ? !!this.details : 'true');
    },
    constructPayload() {
      return {
        txnDetails: this.selected.id,
        aptNo: this.apt,
        amt: this.amount,
      };
    },
  },
};
</script>
<style scoped>
.reportCollection{
  width: 250px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);
}
</style>
