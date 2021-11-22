<template>
  <v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <h3 class="font-weight-medium">Gejala Sakit Yang Dirasakan</h3>
          <v-divider class="mt-1 mb-3"></v-divider>

          <v-radio-group v-model="arvEffetctSelected" column>
            <v-radio
              v-for="(arvEffect, index) in arvEffects"
              :key="index"
              :label="arvEffect"
              color="primary"
              :value="arvEffect"
            ></v-radio>
          </v-radio-group>

          <v-textarea
            label="Lainnya"
            placeholder="Lainnya"
            rows="3"
            filled
            persistent-placeholder
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="3" class="text-center pa-0">
          <v-btn color="primary" class="mr-3"> Simpan </v-btn>

          <v-btn color="primary" outlined> Ubah </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      arvEffects: [
        'Mual Muntah',
        'Diare',
        'Neuropate (kesemutan, nyeri)',
        'Mudah Lelah',
        'Kemerahan Pada Kulit',
        'Nyeri Kepala',
        'Mata dan Badan Kuning',
        'Gangguan Ginjal',
        'Depresi',
        'Halusinasi',
        'Mengantuk',
        'Lainnya',
      ],
      arvEffetctSelected: 'Mual Muntah',
    }
  },
}
</script>
