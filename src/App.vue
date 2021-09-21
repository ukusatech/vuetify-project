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
body{
    background-color: black;
}
.footer {
height: 2em;
background-color:#6A76AB;
text-align: center;
}
</style>
