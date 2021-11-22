<template>
  <v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <label class="font-weight-medium">
            Pemeriksaan Laboratorium Selanjutnya :
          </label>
          <br />
          <input
            type="date"
            class="rounded pa-1 mt-1"
            value="2021-11-11"
            :style="`border: 1px solid !important;`"
          />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <h4 class="font-weight-medium">
            Hasil Laboratorium/ Periksa Terakhir
          </h4>
          <v-divider class="mt-1 mb-3"></v-divider>

          <v-select
            :items="['< 200', '200-300', '> 350']"
            label="CD4"
            placeholder="CD4"
            value="< 200"
            dense
            filled
          ></v-select>

          <v-select
            :items="['terdeteksi', 'tidak terdeteksi']"
            label="VL"
            placeholder="CD4"
            value="terdeteksi"
            dense
            filled
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="mt-3">
        <v-col cols="12" sm="6" md="3" class="text-center pa-0">
          <v-btn color="primary" class="mr-3"> Simpan </v-btn>

          <v-btn color="primary" outlined> Ubah </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
