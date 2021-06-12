import { shallowMount } from "@vue/test-utils";
import MacroDot from "@/components/subComponents/MacroDot";

describe("MacroDot.vue", () => {
  it("show correct text", () => {
    const wrapper = shallowMount(MacroDot, {
      propsData: {
        text: "18 g",
      },
    });
    expect(wrapper.find(".macro-dot-text").text()).toBe("18 g");
  });
});
