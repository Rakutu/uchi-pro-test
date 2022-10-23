<template>
  <td>{{ token.id }}</td>
  <td>{{ token.domain }}</td>
  <td>{{ token.token }}</td>
  <td>
    <v-btn
      elevation="4"
      @click="$router.push(`token/${token.id}/delete?domain=${token.domain}`)"
    >
      Delete token
    </v-btn>
  </td>
</template>

<script>
export default {
  name: "TokenItem",
  props: {
    token: {
      type: Object,
      required: true,
    },
  },
}
</script>