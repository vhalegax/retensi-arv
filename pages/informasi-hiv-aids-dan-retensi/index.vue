<template>
  <div>
    <v-list dense>
      <v-list-item-group>
        <v-list-item
          v-for="(navBtn, i) in navigationButtons"
          :key="i"
          :style="`border: 1px solid #8D6E63 !important;`"
          class="brown lighten-5 rounded-lg my-2"
          nuxt
          :to="navBtn.route"
        >
          <v-row align="center" class="py-1">
            <v-col class="font-weight-medium subtitle-2 black--text">
              {{ navBtn.title }}
            </v-col>
            <v-col cols="1" class="pa-1">
              <v-icon color="black">mdi-chevron-right</v-icon>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationButtons: [
        {
          title: 'Mengenal HIV/AIDS',
          icon: 'mdi-account',
          route: 'mengenal-hiv-aids/',
        },
        {
          title: 'Pentingnya Ketaatan Program HIV/AIDS (Retensi)',
          icon: 'mdi-hospital-box',
          route: 'pentingnya-Ketaatan-program-hiv-aids/',
        },
        {
          title: 'Hal Penting Dalam Retensi',
          icon: 'mdi-calendar-month-outline',
          route: 'hal-penting-dalam-retensi/',
        },
        {
          title: 'Tips Menjaga Kualitas Hidup Anda',
          icon: 'mdi-alert-circle-outline',
          route: 'tips-menjaga-kualitas-hidup-anda/',
        },
        {
          title: 'Stigma Dan Diskriminasi',
          icon: 'mdi-heart',
          route: 'stigma-dan-diskiriminasi/',
        },
        {
          title: 'LTFU (Putus ARV)',
          icon: 'mdi-notebook-check',
          route: 'ltfu/',
        },
      ],
    }
  },
}
</script>
