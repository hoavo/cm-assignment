import { mount } from "@vue/test-utils";
import Nutrients from "@/components/subComponents/Nutrients";

describe("Nutrients.vue", () => {
  it("show correct text", () => {
    const wrapper = mount(Nutrients, {
      propsData: {
        nutrients: {
          carbs: 16,
          fats: 6,
          proteins: 20,
        },
        units: {
          carbs: "g",
          fats: "g",
          proteins: "g",
        },
      },
    });
    expect(wrapper.find(".macro-dot-text").text()).toBe("16 g");
  });
});
