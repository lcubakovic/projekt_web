<template>
  <div>
    <span v-if="canModify">
      <span>&nbsp;&nbsp;</span>
      <button class="btn" @click="deleteRecipe">
        <i class="a"></i> <span>&nbsp;Delete Article</span>
      </button>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DELETE_RECIPE } from "@/common/types/actions";
export default {
  name: "RecipeActionsElement",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    canModify: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["profile", "isAuthenticated"]),
  },
  methods: {
    async deleteRecipe() {
      try {
        await this.$store.dispatch(DELETE_RECIPE, this.recipe.id);
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
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
.a {
  color: #ddd;
  background: #000;
}
</style>
