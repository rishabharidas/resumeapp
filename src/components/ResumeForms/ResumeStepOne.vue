<template>
  <v-row>
    <v-col cols="6">
      <v-text-field label="First Name" v-model="data.name.first" />
    </v-col>
    <v-col cols="6">
      <v-text-field label="Last Name" v-model="data.name.second" />
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";

const data = ref({
  name: {
    first: "",
    second: "",
  },
});

function validateAndPass() {
  return data.value;
}

defineExpose({ validateAndPass });
</script>
