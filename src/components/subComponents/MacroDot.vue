<template>
  <div class="container">
    <span class="macro-dot" :style="{ 'background-color': color }"></span
    ><span class="macro-dot-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "MacroDot",
  props: {
    color: {
      type: String,
      default: "white",
    },
    text: String,
  },
};
</script>

<style scoped>
.macro-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.macro-dot-text {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #6f737a;
  margin-left: 4px;
  white-space: nowrap;
}
</style>
