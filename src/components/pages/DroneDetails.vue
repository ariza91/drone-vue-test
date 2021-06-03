<template>
  <div class="drone-details">
    <div class="title">
      <h3>{{ currentDrone.name }}</h3>
    </div>
    <div class="content">
      <div v-if="isLoading">
        <b-spinner type="grow"></b-spinner>
      </div>
      <div v-else-if="!isLoading && !currentDrone">
        <div class="error">{{ $t("DroneDetails.notFound") }}</div>
      </div>
      <div v-else-if="!isLoading && noData">
        <div class="error">{{ $t("DroneDetails.notData") }}</div>
      </div>
      <div v-else class="w-100">
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
          :items="currentDrone.report"
          :sort-by="sortOptions.sortBy"
          :sort-desc="sortOptions.sortDesc"
          class="table"
        >
          <template #cell(traffic_conditions)="data">
            <span
              class="badge bg-custom text-capitalize"
              :class="data.item.traffic_conditions"
            >
              {{ data.item.traffic_conditions.toLowerCase() }}
            </span>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import columnsOptions, { sortOptions } from "@/constants/drone-details";
import { calculateAverageOf } from "@/utils/cals";

export default {
  name: "DroneDetails",
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
    }),
    columns() {
      return columnsOptions;
    },
    noData() {
      if (!this.currentDrone) return true;
      return !this.currentDrone.report.length;
    },
    averages() {
      if (!this.currentDrone) return;
      return calculateAverageOf(this.currentDrone.report, [
        "speed",
        "latitude",
        "longitude",
      ]);
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

.drone-details {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 5%;

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
  }
}
</style>