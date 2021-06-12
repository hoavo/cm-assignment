<template>
  <div class="card-container">
    <div class="card-body" :style="{ backgroundImage: 'url(' + image + ')' }">
      <h3 class="card-title-top">RECIPE OF THE DAY</h3>
      <h4 class="card-title truncate">{{ title }}</h4>
      <div class="card-rating">
        <StarRating :score="ratingScore" />
      </div>
      <div class="card-meta">
        <span>{{ minutes }}</span> • <span>{{ energy }} {{ energyUnit }}</span>
      </div>
      <div class="card-footer">
        <Nutrients :units="units" :nutrients="nutrients" />
        <div class="btn" @click="$emit('click')">
          <div class="btn-text">Learn More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./subComponents/StartRating.vue";
import { formatMinutesToHourString } from "../utils/time";
import Nutrients from "./subComponents/Nutrients.vue";

export default {
  name: "RecipeOfTheDayCard",
  components: {
    StarRating,
    Nutrients,
  },
  props: {
    title: String,
    image: String,
    ratingScore: Number,
    ratingCount: Number,
    time: Number,
    energyUnit: {
      type: String,
      default: "calories",
    },
    energy: Number,
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
  computed: {
    minutes() {
      return formatMinutesToHourString(this.time);
    },
    energyValue() {
      return this.energyUnit === "kJ"
        ? `${Math.round(4.184 * this.energy)} kJ`
        : `${this.energy} Calories`;
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 343px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.card-body {
  background-position: center center;
  background-size: cover;
  position: relative;
  padding: 34px 16px 24px 20px;
}
.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  height: 52px;
  display: inline-block;
  box-sizing: border-box;
  white-space: pre-line;
  word-wrap: break-word;
  color: white;
}
.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.card-title-top {
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #1bc98e;
}
.card-rating {
  display: inline-block;
}
.card-footer {
  margin-top: 45px;
}
.card-footer >>> .macro-dot-text {
  color: white;
  font-size: 14px;
  line-height: 16px;
}
.btn {
  width: 111px;
  height: 30px;
  background: rgba(255, 255, 255, 0.4);
  mix-blend-mode: normal;
  border-radius: 15px;
  position: absolute;
  right: 16px;
  bottom: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-text {
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  font-weight: bold;
}
.card-meta {
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
@media only screen and (max-width: 768px) {
  .card-container {
    max-width: 100%;
    width: 100%;
  }
}
</style>