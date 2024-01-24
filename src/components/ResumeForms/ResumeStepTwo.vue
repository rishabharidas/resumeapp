<template>
  <v-row v-for="(education, index) in data.educations" :key="index">
    <v-col cols="6">
      <v-text-field label="Name" v-model="education.name" />
    </v-col>
    <v-col cols="6">
      <v-text-field label="Institation Name" v-model="education.institution" />
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";

const data = ref({
  educations: [
    {
      name: "",
      institution: "",
    },
  ],
});

function validateAndPass() {
  return data.value;
}

defineExpose({ validateAndPass });
</script>
