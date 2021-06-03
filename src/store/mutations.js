import * as types from '@/store/mutation-types';

export default {
    [types.SET_LOADING](state, isLoading) {
        state.loading = isLoading;
    },

    [types.CHANGE_ORDER](state, order) {
        state.order = order;
    },

    [types.CHANGE_SEARCH_INPUT](state, input) {
        state.search = input;
    },

    [types.CHANGE_LIST_VIEW](state, view) {
        state.listView = view;
    },

    [types.SET_DRONE_LIST](state, drones) {
        state.drones = drones;
    },

    [types.SET_DRONE](state, drone) {
        state.drone = drone;
    }
}