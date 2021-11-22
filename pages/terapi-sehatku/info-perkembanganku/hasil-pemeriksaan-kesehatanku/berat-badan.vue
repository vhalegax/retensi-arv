<template>
  <v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Berat Badan"
            placeholder="Berat Badan"
            value="60"
            suffix="kg"
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

<script>
export default {
  data() {
    return {}
  },
}
</script>
