import { createLocalVue, shallowMount } from "@vue/test-utils";
import Details from "@/components/pages/Details.vue";
import Vuex from 'vuex'

jest.mock('@/store');
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.filter("round", (data) => data);

const mockInput = 'test';
const mockDrone = {
    id: 1,
    batery: 10,
    report: [
        { id: 1, drone_id: 1, batery: mockInput },
        { id: 2, drone_id: 1, batery: 'other' },
    ]
}

const factory = (store) => shallowMount(Details, {
    localVue,
    store,
    mocks: {
        $t: (value) => value,
        $route: { params: { id: 1 } }
    },
    stubs: ['router-link']
});

describe("Details", () => {
    let cmp;
    let getters;
    let actions;
    let store;

    beforeEach(() => {
        getters = {
            currentDrone: () => mockDrone,
            getSearchInput: () => null,
        }
        actions = {
            getDroneDetails: jest.fn()
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
    describe('watch', () => {
        describe('$route.params', () => {
            it("params change load details", async () => {
                const spy = jest.spyOn(cmp.vm, 'getDetails');
                cmp.vm.$options.watch.$route.call(cmp.vm, { params: { id: 2 } })
                expect(spy).toHaveBeenCalledWith(2)
            });
        });
    })
    describe('computed', () => {
        describe('wrapper', () => {
            it('not current drone list then error', () => {
                getters = { ...getters, currentDrone: () => null }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.wrapper).toEqual("DroneDetails.notFound");
            })
            it('not report list then error', () => {
                getters = {
                    ...getters,
                    currentDrone: () => ({ ...mockDrone, report: [] })
                }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.wrapper).toEqual("DroneDetails.notData");
            })
            it('drone list then null', () => {
                expect(cmp.vm.wrapper).toEqual(null);
            })
        })
        describe('reportFiltered', () => {
            it('not filter then all', () => {
                expect(cmp.vm.reportFiltered).toEqual(mockDrone.report);
            })
            it('filters the reports which contains the input', () => {
                getters = { ...getters, getSearchInput: () => mockInput }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.reportFiltered).toEqual([mockDrone.report[0]]);
            })
            it('filters without reports', () => {
                getters = { ...getters, getSearchInput: () => 'something' }
                store = new Vuex.Store({ getters, actions })
                cmp = factory(store)
                expect(cmp.vm.reportFiltered).toEqual([]);
            })
        })
    })
    describe('methods', () => {
        describe('methods', () => {
            it('not droneId nothing', () => {
                const spy = jest.spyOn(cmp.vm.$store, 'dispatch');
                cmp.vm.getDetails();
                expect(spy).not.toHaveBeenCalled();
            })
            it('with droneId getDroneDetails called', () => {
                const spy = jest.spyOn(cmp.vm.$store, 'dispatch');
                const droneId = 1;
                cmp.vm.getDetails(droneId);
                expect(spy).toHaveBeenCalledWith("getDroneDetails", droneId);
            })
        });
    })
});
