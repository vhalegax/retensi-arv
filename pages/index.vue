<template>
  <div>
    <v-row justify="end" class="pa-3">
      <v-btn color="tertiary" dense>
        <v-icon left> mdi-calendar-month-outline </v-icon>
        AKHIR AMBIL OBAT ARV
      </v-btn>
    </v-row>

    <v-row no-gutters class="mt-3">
      <v-col cols="12" class="mb-2">
        <v-alert class="mb-0 black--text" border="left" color="secondary" dense>
          Hari Ke-4, Konsumsi ARV
        </v-alert>
      </v-col>

      <v-col cols="12" class="mb-2">
        <v-alert class="mb-0 black--text" border="left" color="secondary" dense>
          26 Hari, Periksa Kesehatan Berikutnya
        </v-alert>
      </v-col>

      <v-col cols="12" class="mb-2">
        <v-alert class="mb-0 black--text" border="left" color="secondary" dense>
          26 Desember 2021, Pengambilan ARV Berikutnya
        </v-alert>
      </v-col>
    </v-row>

    <v-divider class="my-3"></v-divider>

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
            <v-col cols="1" class="pa-1">
              <v-icon color="black">{{ navBtn.icon }}</v-icon>
            </v-col>
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
          title: 'Profil',
          icon: 'mdi-account',
          route: '/profil/',
        },
        {
          title: 'Kunjungan Layanan ARV',
          icon: 'mdi-hospital-box',
          route: '/kunjungan-layanan-arv/',
        },
        {
          title: 'Kunjungan Pemeriksaan Laboratorium',
          icon: 'mdi-calendar-month-outline',
          route: '/kunjungan-pemeriksaan-laboratorium/',
        },
        {
          title: 'Informasi HIV/AIDS dan Retensi',
          icon: 'mdi-alert-circle-outline',
          route: '/informasi-hiv-aids-dan-retensi/',
        },
        {
          title: 'Terapi Sehatku',
          icon: 'mdi-heart',
          route: '/terapi-sehatku/',
        },
        {
          title: 'Catatan Penting',
          icon: 'mdi-notebook-check',
          route: '/catatan-penting/',
        },
      ],
    }
  },
}
</script>
