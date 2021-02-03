<template>
  <div>
    <input v-focus:text="message" v-color:red type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello!",
    };
  },
  directives: {
    focus: {
      inserted(el, binding) {
        el.focus();
        console.log(binding.value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
input {
  &:focus {
    outline: 0;
    border: 1px solid lightblue;
    border-radius: 10px;
  }
}
</style>