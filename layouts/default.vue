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
      let title = ''
      const routeName = this.$route.name

      switch (routeName) {
        case 'profil':
          title = 'Profil'
          break

        case 'kunjungan-layanan-arv':
          title = 'Kunjungan Layanan ARV'
          break

        case 'kunjungan-pemeriksaan-laboratorium':
          title = 'Kunjunganan Pemeriksaan Laboratorium'
          break

        // * informasi-hiv-aids
        case 'informasi-hiv-aids-dan-retensi':
          title = 'Informasi HIV/AIDS dan Retensi'
          break

        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids':
          title = 'Mengenal HIV/AIDS'
          break
        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids-pencegahan-penularan-dan-pengobatan-hiv-aids':
          title = 'Pencegahan, Penularan Dan Pengobatan HIV/AIDS'
          break
        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids-pengertian-hiv-aids':
          title = 'Pengertian HIV/AIDS'
          break
        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids-pencegahan-penularan-dan-pengobatan-hiv-aids-info-kelengkapan-terapi-arv':
          title = 'Info Kelengkapan Terapi ARV'
          break
        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids-pencegahan-penularan-dan-pengobatan-hiv-aids-info-kelengkapan-terapi-arv-mengenal-arv':
          title = 'Mengenal ARV'
          break
        case 'informasi-hiv-aids-dan-retensi-mengenal-hiv-aids-pencegahan-penularan-dan-pengobatan-hiv-aids-info-kelengkapan-terapi-arv-pentingnya-tertib-administrasi-untuk-terapi-arv':
          title = 'Pentingnya Tertib Administrasi Untuk Terapi ARV'
          break

        case 'informasi-hiv-aids-dan-retensi-pentingnya-Ketaatan-program-hiv-aids':
          title = 'Pentingnya Ketaatan Program HIV/AIDS'
          break

        case 'informasi-hiv-aids-dan-retensi-tips-menjaga-kualitas-hidup-anda':
          title = 'Tips Menjaga Kualitas Hidup Anda'
          break

        case 'informasi-hiv-aids-dan-retensi-hal-penting-dalam-retensi':
          title = 'Hal Penting Dalam Retensi'
          break

        case 'informasi-hiv-aids-dan-retensi-stigma-dan-diskiriminasi':
          title = 'Stigma dan Diskriminasi'
          break

        case 'informasi-hiv-aids-dan-retensi-ltfu':
          title = 'LTFU (Putus ARV)'
          break
        // #

        // * Terapi Sehatku
        case 'terapi-sehatku':
          title = 'Terapi Sehatku'
          break

        case 'terapi-sehatku-infeksi-oppurtunistik':
          title = 'Infeksi Oppurtunistik'
          break

        case 'terapi-sehatku-info-perkembanganku':
          title = 'Info Perkembanganku'
          break
        case 'terapi-sehatku-info-perkembanganku-hasil-pemeriksaan-kesehatanku':
          title = 'Hasil Pemeriksaan Kesehatanku'
          break
        case 'terapi-sehatku-info-perkembanganku-hasil-pemeriksaan-kesehatanku-berat-badan':
          title = 'Berat Badan'
          break
        case 'terapi-sehatku-info-perkembanganku-hasil-pemeriksaan-kesehatanku-pemeriksaan-laborat':
          title = 'Pemeriksaan Laborat'
          break

        case 'terapi-sehatku-info-perkembanganku-kondisi-saat-ini':
          title = 'Kondisi Saat Ini'
          break
        case 'terapi-sehatku-info-perkembanganku-kondisi-saat-ini-efek-samping-arv':
          title = 'Efek Samping ARV'
          break
        case 'terapi-sehatku-info-perkembanganku-kondisi-saat-ini-gejala-sakit':
          title = 'Gejala Sakit Yang Dirasakan'
          break

        case 'terapi-sehatku-pengawasan-minum-obat':
          title = 'Pengawasan Minum Obat'
          break

        case 'terapi-sehatku-penyakit-penyerta':
          title = 'Penyakit Penyerta'
          break

        case 'terapi-sehatku-terapi-hiv-aids':
          title = 'Terapi HIV/AIDS'
          break
        case 'terapi-sehatku-terapi-hiv-aids-terapi-awal':
          title = 'Terapi Awal'
          break
        case 'terapi-sehatku-terapi-hiv-aids-terapi-lanjut':
          title = 'Terapi Lanjut Bagi Yang Pernah Berhenti ARV'
          break

        //

        case 'catatan-penting':
          title = 'Catatan Penting'
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
