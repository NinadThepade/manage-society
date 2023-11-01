<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="row">
    <span>
      <input :id="formattedData.key"
        class="slide-up"
        :type="formattedData.type"
        :placeholder="formattedData.placeHolderText"
        v-model="inputValue"
        @change="inputUpdated()" />
      <label :for="formattedData.key">{{ formattedData.label }}</label>
    </span>
  </div>
</template>

<script>
const defaultStyles = {
  key: '',
  label: '',
  type: 'text',
  placeHolderText: 'Please specify details',
};

export default {
  name: 'CustomInput',
  props: {
    data: {
      type: Object,
      required: true,
      validator: (value) => value.key !== undefined && value.label !== undefined,
    },
  },
  data() {
    return {
      inputValue: '',
      formattedData: { ...defaultStyles, ...this.data },
    };
  },
  methods: {
    inputUpdated() {
      this.$emit('inputChanged', { key: this.data.key, value: this.inputValue });
    },
  },
};
</script>

<style>
.slide-up {
  display: inline-block;
  width: 215px;
  padding: 10px 0 10px 15px;
  color: #377D6A;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 80px;
  transition: all .3s ease-in-out;

  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
    transform: translateX(0);
    top: 0;
    left: 0;
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgba(19, 38, 74, 0.4);
    transition: all .3s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    overflow: hidden;
    color: #efefef;

    &:before,
    &:after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      z-index: -1;
      transition: all .3s ease-in-out;
    }
    &:before {
      top: 6px;
      left: 5px;
      right: 5px;
      bottom: 6px;
      background: #4c7ded;
    }
    &:after {
      top: 0;
      bottom: 0;
      background: #4c7ded;
    }
  }
}

.slide-up:focus,
.slide-up:active {
  color: #377D6A;
  text-indent: 0;
  background: #fff;

  &::-webkit-input-placeholder {
    color: #aaa;
  }
  + label {
    transform: translateY(-100%);

    &:before {
      border-radius: 5px;
    }
    &:after {
      transform: translateY(100%);
    }
  }
}
.row {
  margin: 50px auto;
  text-align: center;
  position: relative;
  z-index: 1;

    &:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: -5000px;
      height: 100%;
      width: 15000px;
      z-index: -1;
    }

  span {
    position: relative;
    display: inline-block;
    margin: 30px 10px;
  }
}
</style>
