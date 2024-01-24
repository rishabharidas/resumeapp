<template>
  <v-row v-for="(experience, index) in data.experiences" :key="index">
    <v-col cols="4">
      <v-text-field label="Company" v-model="experience.company" />
    </v-col>
    <v-col cols="4">
      <v-text-field label="Title" v-model="experience.title" />
    </v-col>
    <v-col cols="4">
      <v-text-field label="Years" v-model="experience.years" />
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";

const data = ref({
  experiences: [
    {
      company: "",
      title: "",
      years: "",
    },
  ],
});

function validateAndPass() {
  return data.value;
}

defineExpose({ validateAndPass });
</script>
