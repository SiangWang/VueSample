<template>
  <div>
    <button v-bind="$attrs" class="btn-primary">step 1</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>