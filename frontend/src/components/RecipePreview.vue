<template>
  <div class="col-lg-4 mb-3 d-flex align-items-stretch">
    <router-link :to="recipeLink" class="preview-link">
      <div class="card">
        <img
          :src="'http://localhost:5000/api/v1/images/' + recipe.image"
          class="card-img-top"
          alt="Card Image"
        />
        <div class="card-body d-flex flex-column">
          <h5 v-text="recipe.name" class="card-title" />
          <p v-text="recipe.description" class="card-text mb-4" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticlePreviewElement",
  props: {
    recipe: { type: Object, required: true },
  },
  computed: {
    recipeLink() {
      return {
        name: "recipe",
        params: {
          slug: this.recipe.id,
        },
      };
    },
  },
};
</script>

<style></style>
