<template>
  <div>
    {{ count }} {{ moreThan5 }}
    <button v-on:click="increment">increment</button>
  </div>
</template>

<script>
export default {
  created() {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    moreThan5() {
      return this.$store.getters.moreThan5;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped>
</style>