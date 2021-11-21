<template>
  <v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <label class="font-weight-medium">Tanggal Ambil ARV Selanjutnya :</label> <br />
          <input
            type="date"
            class="rounded pa-1 mt-1"
            value="2021-11-11"
            :style="`border: 1px solid !important;`"
          />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <label class="font-weight-medium">Jam Minum Obat Pertama :</label> <br />
          <input
            type="time"
            class="rounded pa-1 mt-1"
            value="08:30"
            :style="`border: 1px solid !important;`"
          />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <label class="font-weight-medium">Jam Minum Obat Kedua :</label> <br />
          <input
            type="time"
            class="rounded pa-1 mt-1"
            value="13:30"
            :style="`border: 1px solid !important;`"
          />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <label class="font-weight-medium">Jam Minum Obat Ketiga :</label> <br />
          <input
            type="time"
            class="rounded pa-1 mt-1"
            value="17:30"
            :style="`border: 1px solid !important;`"
          />
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12" sm="6" md="3" class="text-center pa-0">
          <v-btn color="primary" class="mr-3"> Simpan </v-btn>

          <v-btn color="primary" outlined> Ubah </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
