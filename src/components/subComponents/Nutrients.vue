<template>
  <div class="nutrients">
    <MacroDot
      class="mr"
      :color="'#F94642'"
      :text="`${nutrients.carbs} ${units.carbs}`"
    />
    <MacroDot
      class="mr"
      :color="'#3177BB'"
      :text="`${nutrients.proteins} ${units.proteins}`"
    />
    <MacroDot :color="'#FDA120'" :text="`${nutrients.fats} ${units.fats}`" />
  </div>
</template>

<script>
import MacroDot from "./MacroDot.vue";

export default {
  name: "Nutrients",
  components: {
    MacroDot,
  },
  props: {
    nutrients: {
      proteins: Number,
      carbs: Number,
      fats: Number,
    },
    units: {
      proteins: String,
      carbs: String,
      fats: String,
    },
  },
};
</script>

<style scoped>
.nutrients {
  display: flex;
}
.mr {
  margin-right: 8px;
}
</style>
