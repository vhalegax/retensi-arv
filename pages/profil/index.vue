<template>
  <v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="NIK"
            placeholder="NIK"
            value="0847783223218732"
            type="number"
            filled
          ></v-text-field>

          <v-text-field
            label="Nomor Telp"
            placeholder="Nomor Telp"
            value="08132747263"
            type="number"
            filled
          ></v-text-field>

          <v-textarea
            label="Alamat"
            placeholder="Alamat"
            value="Jalan Serdadu Km 11 no 25"
            rows="3"
            filled
          ></v-textarea>

          <v-textarea
            label="Rumah Sakit Tempat Periksa"
            placeholder="Rumah Sakit Tempat Periksa"
            value="Panti Rapih"
            rows="2"
            filled
          ></v-textarea>

          <h3 class="font-weight-medium">Kontak Darurat Salah Satu Keluarga</h3>
          <v-divider class="mt-1 mb-3"></v-divider>

          <v-text-field
            label="Nomor KTP Keluarga"
            placeholder="NIK"
            value="1462357293451032"
            type="number"
            filled
          ></v-text-field>

          <v-text-field
            label="Nomor Telp Keluarga"
            placeholder="Nomor Telp Keluarga"
            value="089323289321"
            type="number"
            filled
          ></v-text-field>
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
