<template>
  
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="sendEmail"> 
   
      <v-text-field
        v-model="from_name"
        :counter="10"
       
        label="NOME EMAIL"
        
      ></v-text-field>
   
       <v-text-field
        v-model="message"
        :counter="100"
        
        label="CORPO EMAIL"
        
      ></v-text-field>
      <v-text-field
        v-model="reply_to"
        :counter="100"
    
        label="REPLY EMAIL"
        
      ></v-text-field>
      <!-- <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field> -->

      <!-- <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field> -->
<!-- 
      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox> -->

      <v-btn  color="success" class="mr-4" type="submit">
        ENVIAR
      </v-btn>
      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
    
       <div>
          

          
           <router-link to="/sendemail">
<v-icon>mdi-email</v-icon>
</router-link> 
           <a
            href="https://wa.me/5571993141399"
            target="_blank"
          ><v-icon>mdi-whatsapp</v-icon></a>
           
         <a
            href="https://www.instagram.com/ukusa.tech/"
            target="_blank"
          ><v-icon>mdi-linkedin</v-icon></a>
        <a
            href="https://github.com/ukusatech/"
            target="_blank"
          > <v-icon>mdi-github</v-icon></a>
        <a
            href="https://www.instagram.com/ukusa.tech/"
            target="_blank"
          > <v-icon>mdi-instagram</v-icon></a>
    </div>
    
    </v-form>

 

</template>

<script>
import  emailjs, { init } from 'emailjs-com';
init("user_NS6sUcl9SiBRXFDIgh0ax");

export default {
  data: () => ({
    valid: true,
    name: "",
    from_name: "",
    message: "",
    reply_to:"",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
      sendEmail: (e) => {
        console.log("entrou na bagaça: ", e)
        console.log('TARGET: ', e.target)
      emailjs.sendForm('service_ra7epj1', 'template_z0kedl8', e.target, 'user_NS6sUcl9SiBRXFDIgh0ax')
        .then((result) => {
          
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
        console.log("SAIU")
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
 a{
     text-decoration:none;
 }
</style>
