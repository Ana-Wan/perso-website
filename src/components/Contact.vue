<template>
  <v-container class="pa-16 pt-0 secondary--text">
    <v-row class="ma-16" justify="center">
      <div class="text-h4">Contact Me</div>
    </v-row>
    <v-form
      class="ma-16"
      v-model="valid"
      ref="form"
      lazy-validation
    >
      <v-text-field
        class="mx-16"
        v-model="senderName"
        :rules="nameRules"
        label="First name"
        required
        outlined
      />
      <v-text-field
        class="mx-16"
        v-model="senderEmail"
        :rules="emailRules"
        label="Email"
        autocomplete="email"
        required
        outlined
      />
      <v-textarea
        class="mx-16"
        v-model="senderMessage"
        label="Write a message"
        clear-icon="mdi-eraser"
        clearable
        no-resize
        required
        outlined
      />
      <div>
        <v-btn
          class="ml-16 mr-10"
          :disabled="!valid"
          @click="sendEmail"
          color="primary"
          outlined
        >
          Send
        </v-btn>
        <span :class="sendResult ? 'success--text': 'error--text'">{{ sendResultMsg }}</span>
      </div>
    </v-form>
  </v-container>
</template>

<script>
  import emailjs from 'emailjs-com';

  export default {
    name: 'Contact',

    data: () => ({
      valid: true,
      senderName: "",
      senderEmail: "",
      senderMessage: "",
      sendResultMsg: "",
      sendResult: false,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      messageRules: [
        v => !!v || 'Message is required',
      ],
    }),

    methods: {
      sendEmail() {
        var isValid = this.$refs.form.validate();
        if (isValid) {

          var templateParams = {
            sender_name: this.senderName,
            sender_email: this.senderEmail,
            message: this.senderMessage
          };

          var serviceId = process.env.VUE_APP_EMAILJS_SERVICE_ID;
          var templateId = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
          var userId = process.env.VUE_APP_EMAILJS_USER_ID;

          emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                this.sendResultMsg = "Message successfully sent!" 
                this.sendResult = true
            }, (error) => {
                console.log('FAILED...', error);
                this.sendResultMsg = "Error sending message!" 
                this.sendResult = false
            });
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
