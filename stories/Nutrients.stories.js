import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import Nutrients from "../src/components/subComponents/Nutrients.vue";

export default {
  title: "Nutrients",
  component: Nutrients,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Nutrients },
  props: {
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
  template: '<div ><Nutrients :nutrients="nutrients" :units="units"/></div>',
  methods: { action: action("clicked") },
});
