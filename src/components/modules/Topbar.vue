<template>
  <div class="topbar">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/logo.svg" alt="Skilling Drone Lab" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-between mt-2">
        <b-form-input
          class="col-12 col-sm"
          placeholder="Search"
          v-model="searchValue"
          type="text"
          debounce="500"
        ></b-form-input>
        <div
          class="col-12 col-sm d-flex justify-content-around justify-content-sm-end"
        >
          <img src="@/assets/icon-help.svg" />
          <img src="@/assets/icon-settings.svg" />
          <img src="@/assets/icon-notifications.svg" />
          <img src="@/assets/icon-profile.svg" />
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  watch: {
    searchValue() {
      if (this.searchValue === "") this.searchValue = null;
      this.$store.dispatch("changeSearchInput", this.searchValue);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.topbar {
  background-color: $background-primary;
  min-height: $topbar-size;
  border-bottom: 1px solid $border;
  padding: 0 2%;
}
</style>