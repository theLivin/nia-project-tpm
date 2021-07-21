<template>
  <v-data-table
    :loading="loading"
    :headers="headers"
    :items="items"
    :items-per-page="10"
  ></v-data-table>
</template>

<script>
import config from "@/config/";

export default {
  name: "Database",
  data: () => ({
    loading: true,
    headers: [],
    items: [],
  }),
  created() {
    let dbkey = this.$route.params.dbkey;
    let { baseUrl } = config;
    let endpoint = `${baseUrl}/${dbkey}/data`;

    // console.log("fetching from: ", endpoint);

    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.data);
        this.headers = data.data.headers;
        this.items = data.data.payload;
        this.loading = false;
      })
      .catch((err) => {
        console.log("There was an error getting table info: ", err);
        this.loading = false;
      });
  },
};
</script>
