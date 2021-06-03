<template>
  <div class="drone-list-title">
    <h3>{{ $t("DroneListTitle.title") }}</h3>
    <div class="tools">
      <Dropdown
        :title="$t('DroneListTitle.sortBy')"
        :selected="getDroneOrder"
        :options="orderOptions"
        @onSelected="selectOrder"
      />
      <div class="buttons">
        <img
          src="@/assets/icon-grid.svg"
          :class="{ selected: getListView === listViewOptions.grid }"
          @click="selectView(listViewOptions.grid)"
        />
        <img
          src="@/assets/icon-list.svg"
          :class="{ selected: getListView === listViewOptions.list }"
          @click="selectView(listViewOptions.list)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Dropdown from "@/components/modules/Dropdown";
import droneOrderOptions from "@/constants/drone-order";
import listViewOptions from "@/constants/list-view";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      orderOptions: Object.values(droneOrderOptions),
      listViewOptions,
    };
  },
  computed: {
    ...mapGetters({
      getDroneOrder: "getDroneOrder",
      getListView: "getListView",
    }),
  },
  methods: {
    selectOrder(option) {
      this.$store.dispatch("changeOrder", option);
    },
    selectView(view) {
      this.$store.dispatch("changeListView", view);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.drone-list-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }

  .tools {
    display: flex;

    .buttons {
      background-color: $background;
      display: flex;
      border: 1px solid $border;
      border-radius: 5px;
      margin-left: 5px;

      img {
        cursor: pointer;

        :first-child {
          border-right: 1px solid $border;
        }

        &.selected,
        &:hover {
          background-color: rgba(grey, 0.2);
        }
      }
    }
  }
}
</style>