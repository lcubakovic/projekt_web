<template>
  <div class="container">
    <RecipeList class="recipes"></RecipeList>
  </div>
</template>

<script>
import { FETCH_RECIPES } from "@/common/types/actions";
import RecipeList from "@/components/RecipeList.vue";
export default {
  name: "HomPageView",
  components: {
    RecipeList,
  },
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #030e1b;
  font-family: sans-serif;
}


.recipes {
  padding: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}

</style>
