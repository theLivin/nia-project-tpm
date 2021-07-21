<template>
  <v-card link outlined tile class="pa-1" :to="`/db/${dbkey}?name=${dbname}`">
    <v-card-title class="font-weight-bold" style="word-break: unset">
      <span>{{ dbname }}</span>
    </v-card-title>
    <v-card-text>
      <!-- <span>Engine:</span>
      <span class="ml-1">{{ dbengine }}</span> -->
      <v-chip class="text-lowercase" small>{{ dbengine }}</v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DBCard",
  props: ["dbname", "dbkey", "dbengine"],
};
</script>
