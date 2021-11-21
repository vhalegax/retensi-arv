<template>
  <v-app>
    <v-app-bar fixed app color="primary">
      <v-btn v-if="showIconBack" icon @click="$router.back()">
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
      const routeName = this.$route.name
      let title = ''
      switch (routeName) {
        case 'profil':
          title = 'Profil'
          break
        case 'kunjungan-layanan-arv':
          title = 'Kunjungan Layanan ARV'
          break

        default:
          title = 'Beranda'
      }
      return title
    },

    showIconBack() {
      return this.$route.name !== 'index'
    },

    showIconNotification() {
      return this.$route.name === 'index'
    },
  },
}
</script>
