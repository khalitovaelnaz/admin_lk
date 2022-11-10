<template>
  <button class="form__btn"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style>
.form__btn {
  border: 1px solid #76bc21;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 69px;
  color: #76bc21;
  margin-top: 24px;
  text-transform: uppercase;
}
</style>