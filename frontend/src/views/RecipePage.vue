<template>
  <div class="recipe-container">
    <h1 v-text="recipe.name" />
    <p v-text="recipe.description" />
    <RecipeMetaElement :recipe="recipe" :actions="true" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { FETCH_RECIPE } from "@/common/types/actions";
import RecipeMetaElement from "@/components/RecipeMeta";
export default {
  name: "recipePage",
  components: {
    RecipeMetaElement,
  },
  props: {
    slug: {
      type: Number,
      required: true,
    },
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([store.dispatch(FETCH_RECIPE, to.params.slug)]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["recipe", "currentUser", "isAuthenticated"]),
  },
};
</script>

<style>
.recipe-container {
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-container h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sans-serif;
}

.recipe-container p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sans-serif;
}
</style>
