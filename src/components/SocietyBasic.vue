<template>
  <div class="SocietyBasic">
    <div>{{ data.name }}</div>
  </div>
</template>

<script>
import { SOCIETY_BASICS } from '@/utils/utils';

export default {
  data() {
    return {
      data: SOCIETY_BASICS,
    };
  },
};
</script>
