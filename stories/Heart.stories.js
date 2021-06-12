import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Heart from "../src/components/subComponents/Heart.vue";

export default {
  title: "Heart",
  component: Heart,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Heart },
  props: {
    active: {
      default: boolean("Active", true),
    },
  },
  template:
    '<div style="background:#444;display:flex;align-items: center; justify-content: center; width: 50px; height:50px;"><Heart :active="active"/></div>',
  methods: { action: action("clicked") },
});
