<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>
      <div class="premium-recipe-wrapper">
        <div>
          <RecipeOfTheDayCard
            :title="'Keto Italian Beef With Cabbage Noodles'"
            :image="'https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh'"
            :ratingScore="5"
            :time="8"
            :energy="269"
            :energyUnit="'kcal'"
            :nutrients="{ carbs: 16, fats: 6, proteins: 20 }"
            :units="{ carbs: 'g', fats: 'g', proteins: 'g' }"
          />
        </div>
        <div v-for="recipe in recipes" :key="recipe.id">
          <PremiumRecipeCard
            :title="recipe.title"
            :image="recipe.image"
            :isPremium="recipe.isPremium"
            :ratingScore="recipe.rating.score"
            :ratingCount="recipe.rating.count"
            :time="recipe.preparationTimeMinutes"
            :energy="recipe.energy"
            :energyUnit="recipe.units.energy"
            :units="recipe.units"
            :nutrients="recipe.nutrients"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
import RecipeOfTheDayCard from "./components/RecipeOfTheDayCard.vue";
import ApiService from "@/common/api.service";

export default {
  name: "App",
  components: {
    PremiumRecipeCard,
    RecipeOfTheDayCard,
  },
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      try {
        const response = await ApiService.get("/recipe");
        this.recipes = response.data;
      } catch (error) {
        console.info("error", error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 1200px;
  margin: auto;
}

.premium-recipe-wrapper {
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 50%;
  text-align: left;
}
.premium-recipe-wrapper > div {
  margin: 20px;
}
</style>
