<template>
  <v-carousel
  height="717"
  cycle
  show-arrows-on-hover
  hide-delimiter-background
  >
    <div class="inicio">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        
      >
       <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            <h1>Ukusa Tech</h1>
            <h5>por Gustavo Ferreira</h5> 
          </div>
        </v-row>
      </v-sheet>
      </v-carousel-item>
    </div>
  </v-carousel>
</template>
<script>
// import IMG_DNFDN from "../../assets/img/stacks/dotnet-csharp.png";
import IMG_DNCS from "../../assets/img/stacks/dotnet-fdn.png";
import IMG_DNREST from "../../assets/img/stacks/dotnet-restful.png";
import IMG_JEST from "../../assets/img/stacks/Jest.png";
import IMG_JS from "../../assets/img/stacks/JS.png";
import IMG_SQLSERVER from "../../assets/img/stacks/SQLSERVER.png";
import IMG_VUE from "../../assets/img/stacks/vue.png";
import IMG_VUETIFY from "../../assets/img/stacks/VUETIFY.png";
import IMG_XUNIT from "../../assets/img/stacks/xunit.png";
// '../../assets/stacks/JS.png';
export default {
  data() {
    return {
            colors: [
              'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
          'rgba(114, 58, 218, 0.644)',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      items: [
        // {
        //   src: IMG_DNFDN,
        // },
        {
          src: IMG_DNCS,
        },
        {
          src: IMG_DNREST,
        },
        {
          src: IMG_JEST,
        },
         {
          src: IMG_JS,
        },
        {
          src: IMG_SQLSERVER,
        },
        {
          src: IMG_VUE,
        },
        {
          src: IMG_VUETIFY,
        },
        {
          src: IMG_XUNIT,
        },
      ],
    };
  },
};
</script>

<style>
.inicio {
 color: rgba(114, 58, 218, 0.644);
 
}
</style>