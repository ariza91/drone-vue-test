<template>
  <div class="route-list">
    <div class="route-item" v-for="(page, index) in pages" :key="page.label">
      <router-link
        :to="{ name: page.to, params: page.params }"
        class="link"
        :class="{ active: page.to === $route.name }"
      >
        {{ page.label }}
      </router-link>
      <span
        class="separator"
        v-if="index < pages.length - 1 && pages.length !== 1"
      >
        >
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RouteList",
  computed: {
    ...mapGetters({
      currentDrone: "currentDrone",
    }),
    pages() {
      const routes = [
        { label: this.$t("RouteList.home"), to: "Home", path: [""] },
        {
          label: this.$t("RouteList.droneList"),
          to: "DroneList",
          path: ["drone-list", "drone-details"],
        },
      ];
      if (this.currentDrone) {
        routes.push({
          label: this.currentDrone.name,
          to: "DroneDetails",
          params: { id: this.currentDrone.id },
          path: ["drone-details"],
        });
      }
      return routes.filter((route) =>
        route.path.some((p) => this.$route.path.includes(p))
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.route-list {
  background-color: $background-primary;
  height: $route-list-size;
  display: flex;
  align-items: center;
  padding: 0 2%;
  height: 5vh;
  border-bottom: 1px solid $border;

  .separator {
    margin: 0 15px;
  }
}
</style>