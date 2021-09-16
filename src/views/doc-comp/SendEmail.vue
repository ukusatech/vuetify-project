<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="from_name">
    <label>Email</label>
    <input type="email" name="reply_to">

    <input hidden value="Gugu" type="text" name="to_name">
    
    <label>Message</label>
    <textarea name="message"></textarea>


    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
init("user_NS6sUcl9SiBRXFDIgh0ax");
export default {
  methods: {
    sendEmail: (e) => {
      console.log('E: ',e);
      console.log('TARGET: ',e.target);
      emailjs.sendForm('service_ra7epj1', 'template_z0kedl8', e.target, 'user_NS6sUcl9SiBRXFDIgh0ax')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>