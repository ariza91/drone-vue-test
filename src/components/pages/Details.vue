<template>
  <div class="details">
    <DronePageWrapper :content="wrapper">
      <template slot="title">
        <h3>{{ currentDrone ? currentDrone.name : "Drone details" }}</h3>
      </template>
      <template slot="content" slot-scope="slotProps">
        <div v-if="slotProps.show">
          <div class="averages d-flex justify-content-around mb-5">
            <div
              class="item text-center"
              v-for="(avg, index) in averages"
              :key="index"
            >
              {{ $t(`DroneColumns.${avg.key}`) }}
              <span class="badge bg-primary"> {{ avg | round }}</span>
            </div>
          </div>
          <b-table
            responsive
            hover
            :fields="columns"
            :items="reportFiltered"
            :sort-by="sortOptions.sortBy"
            :sort-desc="sortOptions.sortDesc"
            class="table"
          >
            <template #cell(traffic_conditions)="data">
              <TrafficBadge :text="data.item.traffic_conditions" />
            </template>
          </b-table>
        </div>
      </template>
    </DronePageWrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DronePageWrapper from "@/components/modules/DronePageWrapper";
import TrafficBadge from "@/components/elements/TrafficBadge";
import columnsOptions, { sortOptions } from "@/constants/drone-details";
import { calculateAverageOf } from "@/utils/cals";
import { compareAllElementsOf } from "@/utils/filter";

export default {
  name: "DroneDetails",
  components: {
    DronePageWrapper,
    TrafficBadge,
  },
  data() {
    return { sortOptions };
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler(values) {
        this.getDetails(values.id);
      },
    },
  },
  filters: {
    round({ key, value }) {
      return sortOptions.roundValues[key](value);
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      currentDrone: "currentDrone",
      getSearchInput: "getSearchInput",
    }),
    wrapper() {
      if (!this.currentDrone) return this.$t("DroneDetails.notFound");
      return !this.currentDrone.report.length
        ? this.$t("DroneDetails.notData")
        : null;
    },
    columns() {
      return columnsOptions;
    },
    averages() {
      if (!this.currentDrone) return;
      return calculateAverageOf(this.currentDrone.report, [
        "speed",
        "latitude",
        "longitude",
      ]);
    },
    reportFiltered() {
      return this.currentDrone.report.filter(
        (report) =>
          !this.getSearchInput ||
          compareAllElementsOf(report, this.getSearchInput)
      );
    },
  },
  created() {
    const droneId = this.$route.params.id;
    if (!droneId) return this.$router.push({ name: "Home" });
    this.getDetails(droneId);
  },
  methods: {
    getDetails(droneId) {
      if (!droneId) return;
      this.$store.dispatch("getDroneDetails", droneId);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

img {
  width: 50%;
}

.table {
  background-color: white;
  border-radius: 5px;
  text-align: center;

  /deep/ th span.sr-only {
    display: none;
  }
}
</style>