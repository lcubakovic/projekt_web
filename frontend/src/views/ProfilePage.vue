<template>
  <div class="user-profile">
    <h3 class="h3">Profile Page</h3>
    <p class="p1">Hello, {{ username }}.</p>
    <p class="p2" v-if="email">Your email is: {{ email }}</p>
  </div>
</template>

<script>
import { FETCH_PROFILE } from "@/common/types/actions";

export default {
  name: "profilePageView",
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    fetchUserProfileData() {
      this.$store
        .dispatch(FETCH_PROFILE, this.$route.params.username)
        .then((response) => {
          this.username = response.username;
          this.email = response.email;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchUserProfileData();
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (to, from) => {
        this.fetchUserProfileData();
      }
    );
  },
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.user-profile {
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sans-serif;
}

.p1, .p2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: sans-serif;
}

</style>
