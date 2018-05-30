<template>
  <div class="tile is-ancestor">
    <div class="tile is-12 is-vertical is-parent">
      <div class="tile is-parent">
        <article class="tile is-child">
          <p class="title">Bienvenue</p>
          <p class="has-text-centered">Si vous souhaitez en savoir plus sur les talents de création de Marie ou sur les compétences de développement de Thibault, nous vous invitons à sélectionner l'un des liens suivants :</p>
        </article>
      </div>
      <div class="tile is-12 is-parent">
        <router-link class="tile is-parent is-6" to="/marie">
          <article class="tile is-child box has-text-centered">
            <p class="title">Marie</p>
            <p class="subtitle">Les Créations de Marie</p>
            <nav class="level">
              <p class="level-item has-text-centered">
                <img :src="marieAvatarSrc" class="logo"/>
              </p>
              <p class="level-item has-text-centered">
                <img :src="marieLogoSrc" class="logo"/>
              </p>
            </nav>
          </article>
        </router-link>
        <router-link class="tile is-parent is-6" to="/thibault">
          <article class="tile is-child box has-text-centered">
            <p class="title">Thibault</p>
            <p class="subtitle">Concepteur-Développeur chez Sopra Steria</p>
            <nav class="level">
              <p class="level-item has-text-centered">
                <img :src="thibaultAvatarSrc" class="logo" />
              </p>
              <p class="level-item has-text-centered">
                <img :src="thibaultLogoSrc" class="logo" />
              </p>
            </nav>
          </article>
        </router-link>
      </div>
    </div>
  </div>



</template>

<script>
  import MarieAvatar from '../images/photo_marie.jpg'
  import MarieLogo from '../images/logo_marie.svg'
  import ThibaultAvatar from '../images/photo_thibault.jpg'
  import ThibaultLogo from '../images/logo_soprasteria.svg'
  export default {
    data: function () {
      return {
        marieLogoSrc: MarieLogo,
        marieAvatarSrc: MarieAvatar,
        thibaultLogoSrc: ThibaultLogo,
        thibaultAvatarSrc: ThibaultAvatar
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    width: 200px;
  }
</style>

