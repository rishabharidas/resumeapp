<template>
  <v-row>
    <v-col cols="12">
      <v-textarea
        name="input-7-1"
        variant="filled"
        auto-grow
        label="Description"
        v-model="data.description"
      />
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";

const data = ref({
  description: "",
});

function validateAndPass() {
  return data.value;
}

defineExpose({ validateAndPass });
</script>
