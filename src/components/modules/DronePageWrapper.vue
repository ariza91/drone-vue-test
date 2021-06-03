<template>
  <div class="drone-page-wrapper">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <div v-if="isLoading">
        <b-spinner type="grow"></b-spinner>
      </div>
      <div v-else-if="!isLoading && content">
        {{ content }}
      </div>
      <div v-else>
        <slot name="content" :show="!content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    content: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.drone-page-wrapper {
  height: 100%;

  .title {
    width: 100%;
    background-color: $background-primary;
    padding: 10px;
  }

  .content {
    text-align: center;
    padding: 2%;
  }
}
</style>