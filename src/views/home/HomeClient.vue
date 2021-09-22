<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../../assets/img/zulus/gene.jpg"
      scroll-target="#scrolling-techniques-3"
      height="50"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>Ukusa.tech</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab href="#tab-1">Início</v-tab>
           <v-tab-item :value="`tab-1`">
            <inicio />
          </v-tab-item>
          <v-tab href="#tab-2">
            Sobre
            <v-icon>mdi-information-variant</v-icon>
          </v-tab>
             <v-tab-item :value="`tab-2`">
            <about />
          </v-tab-item>
          <!-- <v-tab href="#tab-3"
            >GitHub

            <v-icon>mdi-github</v-icon>
          </v-tab>

          <v-tab href="#tab-4"
            >Vídeos

            <v-icon>mdi-video-vintage</v-icon>
          </v-tab> -->
                 <v-tab-item :value="`tab-4`">
            <videos />
          </v-tab-item>

          <v-tab href="#tab-5">
            Contato
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
          <v-tab-item :value="`tab-5`">
            <contact />
          </v-tab-item>
       
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
     
      max-height="850"
    >
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>
<script>
// import IMG_ZULU_1 from "../../assets/img/zulus/gene.jpg"
import Contact from "../../components/Home/Contact.vue";
import About from "../../components/Home/About.vue";
// import Videos from "../../components/Home/Videos.vue";
import Inicio from "../../components/Home/Inicio.vue";
export default {
  components: {
    Contact,
    About,
    // Videos,
    Inicio
  },
};
</script>