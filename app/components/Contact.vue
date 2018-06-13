<template>

    <div class="container">
      <div class="row text-center">
        <div class="col-sm">
          Vous pouvez nous contacter par mail :
          <a href="mailto:contact@de-boissieu.fr">
            <img :src="mailSrc" :alt="mailAlt" :title="mailTitle" class="contact-logo"/>
          </a>
        </div>
      </div>
      <hr>
      <div class="row text-center">
        <div class="col-sm">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86449.3893598713!2d-1.238267808884892!3d47.38182916901988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48060340e251a85d%3A0x40d37521e0df3c0!2s44150+Ancenis!5e0!3m2!1sfr!2sfr!4v1527604367437" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
</template>

<script>
  import Mail from '../images/mail.svg'
  export default {
    data: function () {
      return {
        mailSrc: Mail,
        mailAlt: 'Mail icon',
        mailTitle: 'Envoyer un mail'
      }
    }
  }
</script>

<style lang="scss">
  .contact-logo {
    width: 50px;
  }
  .contact-logo:hover {
    opacity: 0.8;
  }
</style>
