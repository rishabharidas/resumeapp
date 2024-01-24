<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>
          <div class="heading-contents">
            <span class="text-h5 pt-2">Details</span>
            <v-btn flat icon="mdi-close" @click="dialog = false"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-stepper
            :items="stepItems"
            flat
            alt-labels
            border
            hide-actions
            v-model="step"
          >
            <template v-slot:item.1>
              <ResumeStepOne ref="resumeStep1" />
            </template>
            <template v-slot:item.2>
              <ResumeStepTwo ref="resumeStep2" />
            </template>
            <template v-slot:item.3>
              <ResumeStepThree ref="resumeStep3" />
            </template>
            <template v-slot:item.4>
              <ResumeStepFour ref="resumeStep4" />
            </template>
          </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            v-if="step != 4"
            color="blue-darken-1"
            variant="text"
            @click="moveStepFunc(step)"
          >
            Next
          </v-btn>
          <v-btn
            v-if="step == 4"
            color="blue-darken-1"
            variant="text"
            @click="saveResumeData()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

import ResumeStepOne from "../components/ResumeForms/ResumeStepOne.vue";
import ResumeStepTwo from "../components/ResumeForms/ResumeStepTwo.vue";
import ResumeStepThree from "../components/ResumeForms/ResumeStepThree.vue";
import ResumeStepFour from "../components/ResumeForms/ResumeStepFour.vue";

const dialog = ref(false);

let resumeData = ref({});

const stepItems = ref(["Personal", "Education", "Work", "More"]);

const step = ref(1);

const resumeStep1 = ref(null);
const resumeStep2 = ref(null);
const resumeStep3 = ref(null);
const resumeStep4 = ref(null);

const resumeSteps = new Map([
  [1, resumeStep1],
  [2, resumeStep2],
  [3, resumeStep3],
  [4, resumeStep4],
]);

function openDialog() {
  dialog.value = true;
}

function moveStepFunc(stepValue) {
  let componentValue = resumeSteps.get(stepValue).value.validateAndPass();
  resumeData.value = {
    ...resumeData.value,
    ...componentValue,
  };
  step.value++;
}

function saveResumeData() {
  this.step = 1;
  console.log(resumeData.value);
  dialog.value = false;
}

defineExpose({ openDialog });
</script>
<style scoped lang="scss">
.heading-contents {
  display: flex;
  justify-content: space-between;
}
</style>
