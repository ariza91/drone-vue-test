<template>
  <div class="home">
    <router-link :to="{ name: 'DroneList' }">
      <button class="btn btn-outline-primary">
        {{ $t("Home.droneList") }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15%;

  img {
    width: 50%;
  }
}
</style>