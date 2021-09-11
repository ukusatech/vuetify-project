<template>
  <v-carousel
   cycle
   height="650"
  >
    <v-carousel-item
      v-for="(item,i) in items"
 
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import img2 from '../../assets/img/tech/2.jpg'
import img3 from '../../assets/img/tech/3.jpg'
//  import { img1 } from '../../assets/img/tech'
  export default {
    data () {
      return {
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
          {
            // src: '../../assets/img/tech/2.jpg',
             src: img2,
          },
          {
            src: img3,
            
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
           
          },
          {
             src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
        ],
      }
    },
  }
</script>