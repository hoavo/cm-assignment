import { shallowMount } from "@vue/test-utils";
import Heart from "@/components/subComponents/Heart";

describe("Heart.vue", () => {
  it("show a heart green when active", () => {
    const wrapper = shallowMount(Heart, {
      propsData: {
        active: true,
      },
    });
    expect(wrapper.contains(".heart-active")).toBe(true);
    expect(wrapper.contains(".heart")).toBe(false);
  });
  it("shows an empty heart when not active", () => {
    const wrapper = shallowMount(Heart, {
      propsData: {
        active: false,
      },
    });
    expect(wrapper.contains(".heart-active")).toBe(false);
    expect(wrapper.contains(".heart")).toBe(true);
  });
});
