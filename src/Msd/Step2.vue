<template>
  <button class="btn-warning">step 2 {{ isPublished }}</button>
</template>

<script>
export default {
  props: {
    isPublished: Boolean,
  },
};
</script>