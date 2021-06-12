import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

import StartRating from "../src/components/subComponents/StartRating.vue";

export default {
  title: "StartRating",
  component: StartRating,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { StartRating },
  props: {
    score: {
      default: number("score", 4.5),
    },
  },
  template: '<div ><StartRating :score="score"/></div>',
  methods: { action: action("clicked") },
});
