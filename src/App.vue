<template>
  <div class="app">
    <Topbar />
    <RouteList />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from "@/components/modules/Topbar.vue";
import RouteList from "@/components/modules/RouteList.vue";
import Footer from "@/components/modules/Footer.vue";

export default {
  components: {
    Topbar,
    RouteList,
    Footer,
  },
  name: "App",
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.app {
  background-color: $background;

  .content {
    width: 100%;
    min-height: $content-size;
  }
}
</style>