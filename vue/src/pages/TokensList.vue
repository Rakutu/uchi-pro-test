<template>
  <div>
    <v-btn
      class="add-btn"
      to="/add-token"
    >
      Add token
    </v-btn>
    <h2>Tokens</h2>
    <v-table class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="head in headers" :key="head" class="text-left">
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="token in tokens"
            :key="token.token"
          >
            <token-item
              :token="token"
            />
          </tr>
        </tbody>
      </template>
    </v-table>
  </div>
</template>

<script>
import TokenItem from "@/components/TokenItem";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "TokensList",
  data: () => {
    return {
      headers: [
          'id',
          'Domain',
          'Token',
          'Actions',
      ],
    }
  },
  components: {
    TokenItem
  },
  methods: {
    ...mapMutations({
      setTokens: 'setTokens',
    }),
    ...mapActions({
      fetchTokens: 'fetchTokens',
    }),
  },
  computed: {
    ...mapGetters({
      tokens: 'tokens',
    }),
  },
  mounted() {
    this.fetchTokens();
  }
}
</script>

<style scoped>
  .add-btn {
    margin-bottom: 20px;
  }
</style>