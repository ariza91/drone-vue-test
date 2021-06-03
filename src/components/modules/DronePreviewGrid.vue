<template>
  <div class="drone-preview-grid p-2">
    <b-card>
      <b-card-img
        :src="drone.image"
        alt="drone-image"
        class="rounded-0"
      ></b-card-img>
      <b-card-text class="p-2">
        <b-row class="card-text-wrapper">
          <div class="col font-text-grey">{{ $t("DronePreview.name") }}:</div>
          <div class="col font-title">{{ drone.name }}</div>
        </b-row>
        <b-row class="card-text-wrapper">
          <div class="col font-text-grey">{{ $t("DronePreview.batery") }}:</div>
          <div class="col">{{ drone.batery }}</div>
        </b-row>
        <b-row class="card-text-wrapper">
          <div class="col font-text-grey">{{ $t("DronePreview.age") }}:</div>
          <div class="col">{{ drone.age }}</div>
        </b-row>
      </b-card-text>
      <router-link
        class="btn btn-outline-primary w-100"
        :to="{ name: 'DroneDetails', params: { id: drone.id } }"
      >
        {{ $t("DronePreview.seeDetails") }}
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    drone: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.drone-list-title {
}
</style>