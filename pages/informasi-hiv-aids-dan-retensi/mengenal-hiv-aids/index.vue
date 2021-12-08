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
          title: 'Pengertian HIV/AIDS',
          icon: 'mdi-account',
          route: 'pengertian-hiv-aids/',
        },
        {
          title: 'Pencegahan, Penularan & Pengobatan HIV/AIDS',
          icon: 'mdi-hospital-box',
          route: 'pencegahan-penularan-dan-pengobatan-hiv-aids/',
        },
        {
          title: 'Rangkuman HIV/AIDS dalam bentuk gambar.',
          icon: 'mdi-picture',
          route: 'rangkuman-hiv-aids-bentuk-gambar/',
        },
      ],
    }
  },
}
</script>
