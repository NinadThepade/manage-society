<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="settingsPage">
    <span v-for="(item, index) in menuList" :key="index" class="radioBtnContainer">
      <input type="radio"
        :id="item.id"
        :value="item"
        v-model="selectedOption"
        @change="userClicked(item)" />
      <label :for="item.id"> {{ item.name }} </label>
    </span>

    <!-- The div where the component will be loaded dynamically-->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import AptDetails from '@/components/AptDetails.vue';
import ProfessionalsDetails from '@/components/ProfessionalsDetails.vue';
import SocietyBasic from '@/components/SocietyBasic.vue';
import SocietySettings from '@/components/SocietySettings.vue';
import { SOCIETY_MENU } from '../utils/utils';

export default {
  name: 'SettingsPage',
  components: {
    AptDetails,
    ProfessionalsDetails,
    SocietyBasic,
    SocietySettings,
  },
  data() {
    return {
      menuList: SOCIETY_MENU,
      selectedOption: '',
      currentComponent: null, // Initially, no component is loaded.
    };
  },
  methods: {
    userClicked(item) {
      this.currentComponent = item.id;
    },
  },
};
</script>

<style scoped>
.radioBtnContainer {
  & label {
    display: inline-block;
    margin: 0px 5px;
    padding: 5px 10px;
    background: cornflowerblue;
    border-radius: 8px;
  }

  & input[type="radio"]:checked + label {
    color: aliceblue; /* Change the text color */
    font-weight: bold;
    background: blue;
  }
  & input {
    display: none;
  };
};
</style>
