<template>
  <div>{{ todo.text }} {{ gwegr.message }}</div>
</template>

<script>
export default {
  props: {
    todo: Object,
    gwegr: {
      type: Object,
      default: () => ({ message: "hello" }),
    },
  },
};
</script>

<style scoped>
.test {
  color: lightblue;
}
</style>