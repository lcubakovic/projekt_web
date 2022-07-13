<template>
  <nav class="nav_class">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link
            :to="{ name: 'home' }"
            exact
            class="nav-link"
            active-class="active"
          >
            Kuharica
          </router-link>
        </li>
      </ul>
      <ul v-if="!isAuthenticated" class="nav">
        <li class="nav-item">
          <router-link
            :to="{ name: 'login' }"
            exact
            class="nav-link"
            active-class="active"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'register' }"
            exact
            class="nav-link"
            active-class="active"
          >
            Register
          </router-link>
        </li>
      </ul>

      <ul v-else class="nav">
        <li class="nav-item">
          <router-link
            :to="{ name: 'newRecipe' }"
            exact
            class="nav-link"
            active-class="active"
          >
           New Recipe 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'settings' }"
            exact
            class="nav-link"
            active-class="active"
          >
            Settings
          </router-link>
        </li>
        <li v-if="currentUser.username" class="nav-item">
          <router-link
            :to="{
              name: 'profile',
              params: { username: currentUser.username },
            }"
            exact
            class="nav-link"
            active-class="active"
          >
            {{ currentUser.username }}
          </router-link>
        </li>

        <li @click="logout" class="nav-item">
          <router-link
            :to="{ name: 'home' }"
            exact
            class="nav-link"
            active-class="active"
          >
            Logout
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/common/types/actions";
export default {
  name: "navigationBarComponent",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}

.nav_class {
  overflow: hidden;
  background: #030e1b;
}


.nav a {
  float: left;
  color: #fff;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
}

.nav a:hover {
  color: #030e1b;
  background: #ddd;
}

.nav a.active {
  background: #2aeb74;
  color: #030e1b;
}

</style>
