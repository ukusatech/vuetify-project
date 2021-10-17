<template>
  <v-app>
   

    <v-main>
      <router-view/>
    </v-main>
       
        
    <div class="footer">
            <p>Copyright (c) 2021</p>
        </div>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@font-face {
  font-family: "Rounded Elegance";
  src: local("Rounded Elegance"),
   url(./fonts/Rounded_Elegance.ttf) format("truetype");
}
@font-face {
  font-family: "NoirPro-Bold";
  src: local("NoirPro-Bold"),
   url(./fonts/noir-pro-bold.ttf) format("truetype");
}

html, body{
   margin: 0;
   padding: 0;
}
.footer {
height: 2em;
background-color:#6A76AB;
text-align: center;
}
</style>
