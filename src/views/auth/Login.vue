<template>
      <v-card
    class="mx-auto"
    max-width="544"
    max-height="500"
    outlined
    elevation="7" shaped
  >
    <v-form ref="form" v-model="valid" lazy-validation>
     

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

   <v-text-field
        type="password"
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Login
      </v-btn>

    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length <= 10) || "Password must be less than 8 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
