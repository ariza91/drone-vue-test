<template>
  <span class="badge bg-custom text-capitalize" :class="text">
    {{ text.toLowerCase() }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>