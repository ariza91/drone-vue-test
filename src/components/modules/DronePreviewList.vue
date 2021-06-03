<template>
  <div class="drone-preview-list">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{{ $t("DronePreview.name") }}</th>
          <th scope="col">{{ $t("DronePreview.batery") }}</th>
          <th scope="col">{{ $t("DronePreview.age") }}</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="drone in drones" :key="drone.drone_id" class="align-middle">
          <th scope="row" class="col-2">
            <img :src="drone.image" class="img-fluid" />
          </th>
          <td class="col">{{ drone.name }}</td>
          <td class="col">{{ drone.batery }}</td>
          <td class="col">{{ drone.age }}</td>
          <td class="col">
            <router-link
              class="btn btn-outline-primary w-100"
              :to="{ name: 'DroneDetails', params: { id: drone.id } }"
            >
              {{ $t("DronePreview.seeDetails") }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    drones: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.drone-preview-list {
  width: 100%;
}
</style>