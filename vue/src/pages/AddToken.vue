<template>
  <v-btn
    elevation="4"
    to="/"
    class="back-btn"
  >
    Back
  </v-btn>
  <v-form class="form">
    <v-text-field
      v-model="domain"
      label="Domain name"
      variant="outlined"
    />
    <v-btn class="add-btn" @click="handleAddToken">Add</v-btn>
  </v-form>
  <v-alert v-show="addStatus === 'success'" type="success">Token has been successfully added</v-alert>
  <v-alert v-show="addStatus === 'error'" type="error">Something went wrong</v-alert>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddToken",
  data() {
    return {
      addStatus: 'none',
    }
  },
  methods: {
   ...mapActions({
     addToken: 'addToken',
   }),
    async handleAddToken() {
       const status = await this.addToken();
       if (status === 200) {
         this.addStatus = 'success';
       } else {
         this.addStatus = 'error';
       }

      setTimeout(() => this.$router.push('/'), 1000);
    },
  },
  computed: {
    domain: {
      get() {
        return this.$store.state.domain;
      },
      set(value) {
        this.$store.commit('updateDomain', value);
      }
    }
  },
}
</script>

<style scoped>
  .back-btn {
    margin-bottom: 20px;
  }
  .add-btn {
    height: 54px;
  }
  .form {
    display: flex;
  }
</style>