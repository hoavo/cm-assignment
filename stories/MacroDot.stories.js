import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import MacroDot from "../src/components/subComponents/MacroDot.vue";

export default {
  title: "MacroDot",
  component: MacroDot,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { MacroDot },
  props: {
    color: {
      default: text("color", "red"),
    },
    text: {
      default: text("text", "18 g"),
    },
  },
  template: '<div><MacroDot :color="color" :text="text"/></div>',
  methods: { action: action("clicked") },
});
