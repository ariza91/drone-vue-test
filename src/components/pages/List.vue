<template>
  <div class="list">
    <DronePageWrapper :content="wrapper">
      <template slot="title">
        <DroneListTitle class="title" />
      </template>
      <template slot="content" slot-scope="slotProps">
        <div
          class="grid"
          v-if="slotProps.show && listViewOptions.grid === getListView"
        >
          <DronePreviewGrid
            v-for="drone in droneSorted"
            :key="drone.drone_id"
            :drone="drone"
            class="drone col-12 col-sm-3"
          />
        </div>
        <div v-if="slotProps.show && listViewOptions.list === getListView">
          <DronePreviewList :drones="droneSorted" class="col-12" />
        </div>
      </template>
    </DronePageWrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DronePageWrapper from "@/components/modules/DronePageWrapper";
import DroneListTitle from "@/components/modules/DroneListTitle";
import DronePreviewGrid from "@/components/modules/DronePreviewGrid";
import DronePreviewList from "@/components/modules/DronePreviewList";
import { compareAllElementsOf } from "@/utils/filter";
import sort from "@/utils/sort";
import listViewOptions from "@/constants/list-view";

export default {
  name: "List",
  components: {
    DronePageWrapper,
    DroneListTitle,
    DronePreviewGrid,
    DronePreviewList,
  },
  data() {
    return {
      listViewOptions,
    };
  },
  computed: {
    ...mapGetters({
      getDroneOrder: "getDroneOrder",
      getDroneList: "getDroneList",
      getListView: "getListView",
      getSearchInput: "getSearchInput",
    }),
    droneSorted() {
      if (!this.getDroneList) return [];
      const { key, order } = this.getDroneOrder;
      return this.getDroneList
        .filter(
          (drone) =>
            !this.getSearchInput ||
            compareAllElementsOf(drone, this.getSearchInput)
        )
        .sort((a, b) => sort.byNumber(a, b, key, order));
    },
    wrapper() {
      return !this.droneSorted.length ? this.$t("DroneList.notFound") : null;
    },
  },
  created() {
    this.$store.dispatch("getDroneList");
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.drone-list {
  height: 100%;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>