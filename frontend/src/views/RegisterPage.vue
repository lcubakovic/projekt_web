<template>
  <div
    class="container-md"
  >
    <form @submit.prevent="onSubmit(username, email, password)">
      <h3 class="h3 mb-3 fw-normal">Register</h3>

      <div class="form-floating">
        <input
          type="username"
          class="form-control"
          id="floatingUsername"
          placeholder="username"
          autocomplete="off"
          v-model="username"
        />
        <label for="floatingUsername">Username</label>
      </div>

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
        <button class="btn" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/common/types/actions";
export default {
  name: "registerPageView",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
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
