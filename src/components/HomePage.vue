<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-card class="mx-auto" max-width="344" color="#C5CAE9">
        <v-card-text>
          <div>Resume Creator</div>
          <p class="text-h4 text--primary">RES•U•ME</p>
          <div class="text--primary">
            create a simple resume by providing basic details
          </div>
        </v-card-text>
        <div class="d-flex justify-center pb-4">
          <v-btn
            variant="text"
            color="deep-purple-accent-4"
            @click="routetoCreate()"
          >
            Get Started
          </v-btn>
        </div>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script lang="js">
export default {
  methods: {
    routetoCreate() {
      this.$router.push("/resume");
    },
  },
};
</script>
