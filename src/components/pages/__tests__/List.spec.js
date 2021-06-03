import { createLocalVue, shallowMount } from "@vue/test-utils";
import List from "@/components/pages/List.vue";
import Vuex from 'vuex'
import orderOptions from '@/constants/drone-order'

jest.mock('@/store');
const localVue = createLocalVue()
localVue.use(Vuex)

const mockOrder = orderOptions.batteryASC
const mockDroneList = [
    { id: 1, batery: 10 },
    { id: 2, batery: 20 },
]

const factory = (store) => shallowMount(List, {
    localVue,
    store,
    mocks: { $t: (value) => value },
    stubs: ['router-link']
});

describe("List", () => {
    let cmp;
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            getDroneOrder: () => mockOrder,
            getDroneList: jest.fn(),
            getListView: jest.fn(),
            getSearchInput: jest.fn(),
        }
        actions = {
            getDroneList: jest.fn()
        };
        store = new Vuex.Store({ getters, actions })
        cmp = factory(store);
        jest.clearAllMocks()
    })

    describe('renders', () => {
        it("renders correctly", () => {
            expect(cmp).toMatchSnapshot()
        });
    })
    describe('computed', () => {
        describe('droneSorted', () => {
            it('not droneList then empty array', () => {
                expect(cmp.vm.droneSorted).toEqual([])
            })
            it('droneList and batery ASC then array sorted', () => {
                getters = { ...getters, getDroneList: () => mockDroneList }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.droneSorted).toEqual(mockDroneList)
            })
            it('droneList and batery ASC then array sorted', () => {
                getters = {
                    ...getters,
                    getDroneList: () => mockDroneList,
                    getDroneOrder: () => orderOptions.batteryDESC
                }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.droneSorted).toEqual(mockDroneList.reverse())
            })
        })
        describe('wrapper', () => {
            it('not drone list then error', () => {
                expect(cmp.vm.wrapper).toEqual("DroneList.notFound");
            })
            it('drone list then null', () => {
                getters = { ...getters, getDroneList: () => mockDroneList }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.wrapper).toEqual(null);
            })
        })
    })
    describe('created', () => {
        it('getDroneList called', () => {
            const spy = jest.spyOn(cmp.vm.$store, 'dispatch');
            cmp = factory(store);
            expect(spy).toHaveBeenCalledWith("getDroneList");
        })
    })
});
