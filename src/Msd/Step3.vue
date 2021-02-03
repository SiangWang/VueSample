<template>
  <button class="btn-danger">step 3 {{ isPublished }}</button>
</template>

<script>
export default {
  props: {
    isPublished: Boolean,
  },
};
</script>