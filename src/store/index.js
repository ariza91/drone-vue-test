import Vue from "vue";
import Vuex from "vuex";
import mutations from '@/store/mutations';
import * as actions from '@/store/actions';
import * as getters from '@/store/getters';

Vue.use(Vuex);

const state = {
  loading: false,
  order: null,
  listView: null,
  search: null,
  drones: [],
  drone: null,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
