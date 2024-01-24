<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-app-bar :elevation="9">
        <template v-slot:prepend>
          <v-app-bar-title class="pl-4">{{ appTitle }}</v-app-bar-title>
        </template>
        <template v-slot:append>
          <v-btn icon="mdi-plus" @click="addNewResume()"></v-btn>
        </template>
      </v-app-bar>
    </v-responsive>
  </v-container>
  <CreateResumeModal ref="resumeModalChild" />
</template>
Resumes
<script setup>
import CreateResumeModal from "./CreateResumeModal.vue";
import { ref } from "vue";

const appTitle = ref('All resumes')

const resumeModalChild = ref(null);

function addNewResume() {
  resumeModalChild.value.openDialog();
}
</script>
