<template>
  <div class="card-container">
    <div
      class="card-thumbnail"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <div class="favorite"><Heart :active="isFavorite" /></div>
      <div class="premium-badge" v-if="isPremium">
        <img alt="Premium Recipe" src="../assets/icons/trophy.svg" /> Premium
        Recipe
      </div>
    </div>
    <div class="card-body">
      <h4 class="card-title truncate">{{ title }}</h4>
      <div class="card-rating">
        <StarRating :score="ratingScore" />
        <span class="count" v-if="ratingCount"
          >{{ ratingCount }} rating<span v-if="ratingCount > 1">s</span></span
        >
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <div class="card-meta-item">
            <img alt="icon clock" src="../assets/icons/clock.svg" />
            <span class="item-meta-text">{{ minutes }}</span>
          </div>
          <div class="card-meta-item">
            <img alt="icon cals" src="../assets/icons/cals.svg" />
            <span class="item-meta-text">{{ energyValue }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "./subComponents/Heart.vue";
import StarRating from "./subComponents/StartRating.vue";
import { formatMinutesToHourString } from "../utils/time";

export default {
  name: "PremiumRecipeCard",
  components: {
    Heart,
    StarRating,
  },
  props: {
    title: String,
    image: String,
    isPremium: Boolean,
    isFavorite: Boolean,
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
  margin: 20px;
}
.card-body {
  padding: 8px 16px 16px;
}
.card-thumbnail {
  height: 200px;
  background-position: center center;
  background-size: cover;
  position: relative;
}
.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  height: 40px;
  display: inline-block;
  box-sizing: border-box;
  white-space: pre-line;
  word-wrap: break-word;
  color: "#0C0C0A";
}
.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.premium-badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 4px 8px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  position: absolute;
  left: 8px;
  bottom: 8px;
  display: flex;
  text-align: center;
}
.premium-badge img {
  margin-right: 4px;
}
.favorite {
  position: absolute;
  top: 16px;
  right: 16px;
}
.card-rating {
  display: inline-block;
  margin: 16px 0 10px;
}
.card-rating .count {
  color: #1ca677;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  margin-left: 6px;
}
.item-meta-text {
  font-size: 12px;
  line-height: 14px;
  color: #393c40;
  margin-left: 8px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.card-meta {
  display: flex;
}
.card-meta-item {
  display: flex;
  text-align: center;
  margin-right: 16px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}
</style>