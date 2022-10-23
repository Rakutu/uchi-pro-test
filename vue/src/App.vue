<template>
  <v-app>
    <v-main>
      <v-banner
        color="primary"
        elevation="4"
      >
        <h1 class="title">
          Tokens system
        </h1>
      </v-banner>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  .title {
    font-weight: 400;
  }
</style>