import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: text(
        "title",
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions"
      ),
    },
    image: {
      default: text(
        "image",
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
      ),
    },
    isPremium: {
      default: boolean("isPremium", false),
    },
    isFavorite: {
      default: boolean("isFavorite", false),
    },
    ratingScore: {
      default: number("ratingScore", 4.5),
    },
    ratingCount: {
      default: number("ratingCount", 200),
    },
    time: {
      default: number("time", 100),
    },
    energyUnit: { default: text("energyUnit", "kJ") },
    energy: {
      default: number("energy", 75),
    },
    nutrients: {
      default: object("Nutrients", {
        carbs: 16,
        fats: 6,
        proteins: 20,
      }),
    },
    units: {
      default: object("units", {
        carbs: "g",
        fats: "g",
        proteins: "g",
      }),
    },
  },
  template:
    '<PremiumRecipeCard @click="action" :title="title" :image="image" :isPremium="isPremium" :isFavorite="isFavorite" :ratingScore="ratingScore" :ratingCount="ratingCount" :time="time" :energyUnit="energyUnit" :energy="energy" :nutrients="nutrients"  :units="units"  />',
  methods: { action: action("clicked") },
});
