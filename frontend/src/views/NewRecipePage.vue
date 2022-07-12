<template>
  <div class="container-md">
    <form @submit.prevent="onSubmit(name, description)">
      <h3 class="h3">Add New Recipe</h3>

      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Name"
          id="floatingTextarea"
          v-model="name"
        ></textarea>
        <label for="floatingTextarea">Recipe Name</label>
      </div>

      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Description"
          id="floatingTextarea2"
          style="height: 100px"
          v-model="description"
        ></textarea>
        <label for="floatingTextarea2">Recipe Description</label>
      </div>

      <button class="btn" type="submit">
        Save Recipe
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { POST_RECIPE } from "@/common/types/actions";

export default {
  name: "newRecipePageView",
  data() {
    return {
      name: null,
      description: null,
    };
  },
  methods: {
    onSubmit(name, description) {
      this.$store
        .dispatch(POST_RECIPE, { name, description })
        .then(() => this.$router.push({ name: "home" }));
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container-md {
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-floating {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
}

.h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sans-serif;
}

.btn {
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.btn:hover {
  color: #ddd;
  background: #000;
}

</style>
