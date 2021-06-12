import { shallowMount } from "@vue/test-utils";
import StartRating from "@/components/subComponents/StartRating";

describe("StartRating.vue", () => {
  it("render 0 stars active ", () => {
    const wrapper = shallowMount(StartRating, {
      propsData: {
        score: 0,
      },
    });
    expect(wrapper.findAll(".star-active").length).toEqual(0);
    expect(wrapper.findAll(".star-white").length).toEqual(5);
  });

  it("render 4 stars active equal to score", () => {
    const wrapper = shallowMount(StartRating, {
      propsData: {
        score: 4,
      },
    });
    expect(wrapper.findAll(".star-active").length).toEqual(4);
    expect(wrapper.findAll(".star-white").length).toEqual(1);
  });

  it("render 4 stars active and a half", () => {
    const wrapper = shallowMount(StartRating, {
      propsData: {
        score: 4.5,
      },
    });
    expect(wrapper.findAll(".star-active").length).toEqual(4);
    expect(wrapper.findAll(".star-half").length).toEqual(1);
  });

  it("render full stars active", () => {
    const wrapper = shallowMount(StartRating, {
      propsData: {
        score: 5,
      },
    });
    expect(wrapper.findAll(".star-active").length).toEqual(5);
  });
});
