<template>
  <v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "false");
    }
  }
};
</script>

<style>
</style>