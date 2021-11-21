<template>
  <v-app>
    <v-app-bar fixed app color="primary">
      <v-btn v-if="showIconBack" icon>
        <v-icon large color="white">mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-1 white--text" v-text="title" />
      <v-spacer />
      <v-btn v-if="showIconNotification" icon>
        <v-icon large color="white">mdi-bell-ring</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    title() {
      return 'Beranda'
    },

    showIconBack() {
      return false
    },

    showIconNotification() {
      return true
    },
  },
}
</script>
