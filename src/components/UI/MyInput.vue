<template>
  <input class="form__input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "my-input",
  methods: {
    updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style>
.form__input {
  display: block;
  background: #e9e9e9;
  width: 100%;
  height: 69px;
  margin-bottom: 48px;
  padding-left: 25.5px;
  border: 0px;
}
</style>