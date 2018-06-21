<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-4 text-center">
        <h3>Marie de Boissieu</h3>
        <img :src="marieAvatarSrc" :alt="marieAvatarAlt" class="marie-avatar img-fluid"/>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="col-sm-8 text-center">
            <h2>Les Créations de Marie</h2>
            <h6>Venez admirer mes créations !</h6>
            <a href="https://creationsdemarie.fr" target="_blank" class="btn btn-secondary">creationsdemarie.fr</a>
          </div>
          <div class="col-sm-4 text-center">
            <a href="https://creationsdemarie.fr" target="_blank">
              <img :src="marieLogoSrc" :alt="marieLogoAlt" class="marie-logo img-fluid"/>
            </a>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-4 text-center">
            <a href="https://www.facebook.com/aloerevelation/" target="_blank">
              <img :src="marieLogoForeverSrc" :alt="marieLogoForeverAlt" class="marie-logo img-fluid"/>
            </a>
          </div>
          <div class="col-sm-8 text-center">
            <h2>Forever Living Products</h2>
            <h6 class="text-justify">Découvrez tout une gamme de cosmétiques et compléments alimentaires à base d'Aloe Vera.</h6>
            <a href="https://www.facebook.com/aloerevelation/" target="_blank" class="btn btn-secondary">facebook.com/aloerevelation</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import MarieAvatar from '../images/photo_marie.jpg'
  import MarieLogo from '../images/logo_marie.svg'
  import ForeverLogo from '../images/logo_forever.svg'
  export default {
    data: function () {
      return {
        marieLogoSrc: MarieLogo,
        marieLogoAlt: 'Les Créations de Marie Logo',
        marieAvatarSrc: MarieAvatar,
        marieAvatarAlt: 'Marie Picture',
        marieLogoForeverSrc: ForeverLogo,
        marieLogoForeverAlt: 'Forever Logo'
      }
    }
  }
</script>

<style lang="scss">
  .marie-avatar {
    width: 200px;
  }
  .marie-logo {
    padding-top: 5px;
    width: 250px;
  }
</style>
