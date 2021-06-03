<template>
  <div class="dropdown">
    <b-dropdown
      id="dropdown-sort-id"
      variant="link"
      toggle-class="dropdown-slot"
    >
      <template #button-content>
        <div class="title font-small-size">{{ title }}</div>
        <div class="selected font-small-size">
          {{ selected ? selected.label : "" }}
        </div>
      </template>

      <b-dropdown-item
        v-for="option in options"
        :key="option.label"
        @click="select(option)"
      >
        {{ option.label }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    title: {
      type: String,
      require: true,
    },
    selected: {
      type: Object,
      require: false,
      default: () => null,
    },
    options: {
      type: Array,
      require: true,
    },
  },
  methods: {
    select(option) {
      this.$emit("onSelected", option);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.dropdown {
  width: 100%;
  height: 100%;

  /deep/ .dropdown-slot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: transparent;
    color: black;
    border: 1px solid $border;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .title {
    color: grey;
    margin-right: 5px;
  }

  .dropdown-menu {
    position: relative;
  }
}
</style>