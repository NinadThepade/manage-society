<template>
  <div class="societySettings">
    <button v-for="button in buttonList"
      :key="button.id"
      class="tile"
      @click="buttonClicked(button)">
      {{ button.name }}
    </button>
  </div>
</template>

<script>
import { SOCIETY_MENU } from '../utils/utils';

export default {
  name: 'SocietySettings',
  props: {
    msg: String,
  },
  data() {
    return {
      buttonList: SOCIETY_MENU,
    };
  },
  methods: {
    buttonClicked(item) {
      // Handle the button click for the selected item.
      console.log(item.id);
    },
  },
};
</script>

<style scoped>
button:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}

/* Button style */
button {
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
}
.tile {
  padding: 20px;
  margin: 10px;
  background: cornflowerblue;
  color: aliceblue;
  border-radius: 8px;
  border: aliceblue;
  width: 250px;
}
</style>
