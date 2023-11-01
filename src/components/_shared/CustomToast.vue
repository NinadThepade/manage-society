<template>
  <div v-if="show" class="toast" :class="`toast-${type}`">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      type: 'info',
    };
  },
  methods: {
    showToast(message, type = 'info') {
      this.message = message;
      this.type = type;
      this.show = true;

      // Automatically hide the toast after a specified duration (5 seconds by default)
      setTimeout(() => {
        this.hideToast();
      }, 5000);
    },
    hideToast() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  transition: opacity 0.5s;
  z-index: 1000;
}

.toast-success {
  background-color: #4CAF50;
}

.toast-error {
  background-color: #F44336;
}

.toast-info {
  background-color: #2196F3;
}

.toast-warning {
  background-color: #FF9800;
}
</style>
