<template>
  <div class="container">

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Bienvenue</p>
          <p>Si vous souhaitez en savoir plus sur les talents de création de Marie ou sur les compétences de développement de Thibault, nous vous invitons à sélectionner l'un des liens suivants :</p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <router-link class="tile is-parent" to="/marie">
          <article class="tile is-child box has-text-centered">
            <p class="title">Marie</p>
            <p class="subtitle">Les Créations de Marie</p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <figure class="image is-128x128">
                  <img :src="marieAvatarSrc" />
                </figure>
              </div>
              <div class="tile is-parent">
                <figure class="image is-128x128">
                  <img :src="marieLogoSrc" />
                </figure>
              </div>
            </div>
          </article>
        </router-link>
        <router-link class="tile is-parent" to="/thibault">
          <article class="tile is-child box has-text-centered">
            <p class="title">Thibault</p>
            <p class="subtitle">Concepteur-Développeur chez Sopra Steria</p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <figure class="image is-128x128">
                  <img :src="thibaultAvatarSrc" />
                </figure>
              </div>
              <div class="tile is-parent">
                <figure class="image is-128x128">
                  <img :src="thibaultLogoSrc" />
                </figure>
              </div>
            </div>
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
  import ThibaultLogo from '../images/logo_thibault.svg'
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

