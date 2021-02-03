<template>
  <div class="alert-danger">
    Error!
    <slot v-bind:user="user">
      {{ user.firstName }}
    </slot>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      user: {
        firstName: "Shawn",
        lastName: "last name",
        age: 30,
      },
    };
  },
};
</script>

<style scoped>
.alert-danger {
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 10px;
}
</style>