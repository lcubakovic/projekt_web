<template>
  <div
    class="container-md"
  >
    <form @submit.prevent="onSubmit(email, password)">
      <h3 class="h3 mb-3 fw-normal">Login</h3>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          autocomplete="off"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating">

        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          autocomplete="off"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>

      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LOGIN } from "@/common/types/actions";

export default {
  name: "loginPageView",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
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
  text-align: center;
}

.btn:hover {
  color: #ddd;
  background: #000;
}
</style>
