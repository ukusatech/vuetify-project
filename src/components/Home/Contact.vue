<template>
    <div class="container">
        <v-flex v-if="formContato" persistent>
        <form @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="from_name"
            name="from_name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="reply_to"
            name="reply_to"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
        </v-flex>
         <v-flex v-if="!formContato" persistent>
             <v-img :contain="true" :src="require(
        '@/assets/img/icons/check.png')" height="360px">
      </v-img>
       <h1>E-mail enviado com sucesso!</h1>
        </v-flex>
    </div>
</template>
<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
}

label {
  float: left;
  color: #5D5F91;
}
h1 {
  float: center;
  color: #5D5F91;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
<script>
import  emailjs, { init } from 'emailjs-com';
init("user_NS6sUcl9SiBRXFDIgh0ax");

export default {
  data: () => ({
    formContato: true,
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
  // data() {
  //   // declaração de variáveis
  //   return {
  //     formContato: true,
  //   valid: true,
  //   name: "",
  //   from_name: "",
  //   message: "",
  //   reply_to:"",
  //  };
  // },
  methods: {
    sendEmail(e){
      if(
        this.from_name ===  null || this.from_name ===  "" ||
    this.message ===  null || this.message ===  "" ||
    this.reply_to ===  null || this.reply_to ===  "" ){
      alert('CAMPOS NULOS OU VAZIOS');
      return null;
    }

       emailjs.sendForm('service_ra7epj1', 'template_z0kedl8', e.target, 'user_NS6sUcl9SiBRXFDIgh0ax')
        .then((result) => {

            console.log('SUCCESS!', result.status, result.text);
            // alert('EMAIL ENVIADO COM SUCESSO ');
            this.limpaForm();
            this.formContato = false;

           
           
        }, (error) => {
            console.log('FAILED...', error);
        });
        console.log("SAIU")
        this.reply_to = "";
    },
     limpaForm(){
      console.log= "entrou no limpa form";
      this.from_name = "";
      this.reply_to = "";
      this.message= "";
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
