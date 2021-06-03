// Real import
// import axios from 'axios'
import axios from '@/backend-mock/axios'
import * as types from '@/store/mutation-types';
import droneOrderOptions from "@/constants/drone-order";
import listViewOptions from "@/constants/list-view";

const endpoint = "testing";

export const initStore = async ({ commit }) => {
    commit(types.SET_LOADING, true)
    commit(types.CHANGE_ORDER, droneOrderOptions.batteryDESC);
    commit(types.CHANGE_LIST_VIEW, listViewOptions.grid)
    commit(types.SET_LOADING, false)
}

export const changeOrder = ({ commit }, order) => commit(types.CHANGE_ORDER, order);
export const changeListView = ({ commit }, view) => commit(types.CHANGE_LIST_VIEW, view);
export const changeSearchInput = ({ commit }, value) => commit(types.CHANGE_SEARCH_INPUT, value);

export const getDroneList = async ({ commit }) => {
    try {
        commit(types.SET_LOADING, true)
        commit(types.CHANGE_SEARCH_INPUT, null)

        const { data } = await axios.get(`${endpoint}/drones`);

        commit(types.SET_DRONE_LIST, data)
        commit(types.SET_LOADING, false)

        return data;
    } catch (error) {
        console.error('getDroneList', error)
        commit(types.SET_LOADING, false)
        throw error;
    }
}

export const getDroneDetails = async ({ commit }, id) => {
    try {
        commit(types.SET_LOADING, true)
        commit(types.SET_DRONE, null)
        commit(types.CHANGE_SEARCH_INPUT, null)

        const { data } = await axios.get(`${endpoint}/drone/${id}`);

        commit(types.SET_DRONE, data)
        commit(types.SET_LOADING, false)

        return data;
    } catch (error) {
        console.error('getDroneDetails', error)
        commit(types.SET_LOADING, false)
        throw error;
    }
}