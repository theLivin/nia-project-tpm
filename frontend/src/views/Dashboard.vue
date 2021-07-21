<template>
  <v-row>
    <p class="placeholder-text" v-if="loading">Loading items...</p>
    <p class="placeholder-text" v-else-if="!dbs.length">No data available.</p>
    <v-col v-for="db in dbs" :key="db.id" cols="12" sm="6" md="3">
      <DBCard :dbname="db.name" :dbkey="db.key" :dbengine="db.engine" />
    </v-col>
  </v-row>
</template>

<script>
import DBCard from "@/components/DBCard";
import config from "@/config/";

export default {
  name: "Dashboard",
  components: { DBCard },
  data: () => ({
    loading: true,
    dbs: [],
  }),
  created() {
    let { baseUrl } = config;
    let endpoint = `${baseUrl}/nia/info`;

    // console.log("fetching from: ", endpoint);

    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.dbs = data.data;
        // console.log(data.data);
      })
      .catch((err) => {
        console.log("An error occured while fetching databases: ", err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
