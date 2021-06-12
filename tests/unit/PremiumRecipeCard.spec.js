import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      title:
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
      image:
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh",
      isFavorite: true,
      isPremium: true,
      time: 100,
      energy: 320,
      ratingScore: 3.2,
      ratingCount: 221,
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
  it("render title", () => {
    expect(wrapper.find(".card-title").text()).toBe(
      "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions"
    );
  });
  it("show a premium badge", () => {
    expect(wrapper.contains(".premium-badge")).toBe(true);
  });

  it("show a favorite ", () => {
    expect(wrapper.contains(".favorite")).toBe(true);
  });
});
