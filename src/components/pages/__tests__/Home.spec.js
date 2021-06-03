import { shallowMount } from "@vue/test-utils";
import Home from "@/components/pages/Home.vue";

const factory = () => shallowMount(Home, {
    mocks: { $t: (value) => value },
    stubs: ['router-link']
});

describe("Home", () => {
    let cmp;

    beforeEach(() => {
        cmp = factory();
    })

    describe('renders', () => {
        it("renders correctly", () => {
            expect(cmp).toMatchSnapshot()
        });
    })
});
