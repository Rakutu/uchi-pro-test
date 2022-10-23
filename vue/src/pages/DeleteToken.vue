<template>
  <v-card
      class="mx-auto"
      variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          Do you really want to delete this token for this "{{ $route.query.domain }}" organization
        </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn variant="outlined" @click="handleDelete($route.params.id)">
        Yes
      </v-btn>
      <v-btn variant="outlined" to="/">
        No
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-alert v-show="deleteStatus === 'success'" type="success">Token has been successfully deleted</v-alert>
  <v-alert v-show="deleteStatus === 'error'" type="error">Something went wrong</v-alert>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteToken",
  data() {
    return {
      deleteStatus: 'none',
    }
  },
  methods: {
    ...mapActions({
      deleteToken: 'deleteToken',
    }),
    async handleDelete(id) {
      const status = await this.deleteToken(id);
      if (status === 200) {
        this.deleteStatus = 'success';
      } else {
        this.deleteStatus = 'error';
      }

      setTimeout(() => this.$router.push('/'), 1000);
    }
  }
}
</script>