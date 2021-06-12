<template>
  <div class="stars">
    <span
      class="star-active"
      v-for="index in Math.floor(score)"
      :key="'star-active' + index"
    >
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.46175 9.64421L10.1222 12L9.15082 7.56L12.3848 4.57263L8.12613 4.18737L6.46175 0L4.79737 4.18737L0.538681 4.57263L3.77268 7.56L2.80129 12L6.46175 9.64421Z"
          fill="#FDA01E"
        />
      </svg>
    </span>

    <span class="star-half" v-if="score % 1 !== 0">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="white" />
        <path
          opacity="0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 18.0737L18.18 22L16.54 14.6L22 9.62105L14.81 8.97895L12 2L9.19 8.97895L2 9.62105L7.46 14.6L5.82 22L12 18.0737Z"
          fill="#AAAEB3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 18.0737V2L9.19 8.97895L2 9.62105L7.46 14.6L5.82 22L12 18.0737Z"
          fill="#FDA01E"
        />
      </svg>
    </span>
    <span
      class="star-white"
      v-for="index in 5 - Math.round(score)"
      :key="'star-white' + index"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.07694 9.64421L9.73739 12L8.76601 7.56L12 4.57263L7.74132 4.18737L6.07694 0L4.41255 4.18737L0.15387 4.57263L3.38786 7.56L2.41648 12L6.07694 9.64421Z"
          fill="#AAAEB3"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "StartRating",
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.stars {
  display: inline-block;
}
</style>
