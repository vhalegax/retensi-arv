<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/images/1.png',
        },
        {
          src: '/images/2.png',
        },
        {
          src: '/images/3.png',
        },
        {
          src: '/images/4.png',
        },
        {
          src: '/images/5.png',
        },
        {
          src: '/images/6.png',
        },
        {
          src: '/images/7.png',
        },
        {
          src: '/images/8.png',
        },
        {
          src: '/images/9.png',
        },
        {
          src: '/images/10.png',
        },
        {
          src: '/images/11.png',
        },
        {
          src: '/images/12.png',
        },
        {
          src: '/images/13.png',
        },
      ],
    }
  },
}
</script>
