<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
     
      scroll-target="#scrolling-techniques-3"
      height="100"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>


      <v-app-bar-title>Ukusa.Tech</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Início</v-tab>
          <v-tab>Sobre

           <v-icon>mdi-information-variant</v-icon>
          </v-tab>
          <v-tab>GitHub

             <v-icon>mdi-github</v-icon>
          </v-tab>
          <v-tab>Vídeos
           
 <v-icon>mdi-video-vintage</v-icon>
          </v-tab>


          <v-tab href="#tab-3">
            Contato
            <v-icon>mdi-account-box</v-icon>
            <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="`tab-${i}`"
      >
       <contact/>
      </v-tab-item>
            </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>
<script>
import Contact from '../../components/Home/Contact.vue'
export default {
  components: {
      Contact,
    },
}
</script>