<template>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child has-text-centered box">
          <p class="title">Marie de Boissieu</p>
          <img :src="marieAvatarSrc" :alt="marieAvatarAlt" class="marie-avatar"/>
        </article>
      </div>
      <div class="tile is-parent is-8 is-vertical">
        <article class="tile is-child has-text-centered box">
          <p class="title">Les Créations de Marie</p>
          <p class="subtitle">Venez admirer mes créations !</p>
          <a href="https://creationsdemarie.fr" target="_blank">
            <img :src="marieLogoSrc" :alt="marieLogoAlt" class="marie-logo"/>
          </a>
        </article>
        <article class="tile is-child has-text-centered box">
            <p class="title">Forever Living Products</p>
            <p class="subtitle">Découvrez tout une gamme de cosmétiques <br/> et compléments alimentaires à base d'Aloe Vera.</p>
            <a href="https://www.facebook.com/aloerevelation/" target="_blank">
              <img :src="marieLogoForeverSrc" :alt="marieLogoForeverAlt" class="marie-logo"/>
            </a>
        </article>
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
    width: 250px;
  }
</style>
