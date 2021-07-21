<template>
  <v-app>
    <v-app-bar app tile color="white">
      <div style="width: 100%; text-align:center;" class="mt-5 mb-3">
        <router-link to="/" style="text-decoration:none;"
          ><h2 class="font-weight-bold">
            NHIA
          </h2></router-link
        >
        <span class="grey--text"> {{ $route.query.name || "Dashboard" }}</span>
      </div>
      <template v-slot:extension>
        <v-spacer />
        <v-btn text plain tile link to="/" :disabled="$route.path == '/'" small>
          home
        </v-btn>
        <v-btn
          outlined
          tile
          class="ml-3"
          small
          @click="populate"
          :loading="loading"
          >populate</v-btn
        >
        <v-spacer />
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pt-8 px-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import config from "@/config/";

export default {
  data: () => ({
    loading: false,
    pages: [],
    pageNum: 0,
  }),

  methods: {
    async populate() {
      this.loading = true;
      let { baseUrl } = config;
      let endpoint = `${baseUrl}/nia/populate/20`;

      // console.log("fetching from: ", endpoint);
      await fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.data);
          return data;
        })
        .catch((err) => {
          console.log("There was an error getting table info: ", err);
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Raleway", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
