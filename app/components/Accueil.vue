<template>
  <section class="section">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Salutations !
            </h1>
            <h2 class="subtitle">
              Si vous souhaitez en savoir plus sur les talents de création de Marie ou sur les compétences de développement de Thibault, nous vous invitons à sélectionner l'un des liens suivants</p>
            </h2>
          </div>
        </div>
      </section>
      <div class="columns">
        <div class="column has-text-centered">
          <router-link to="/marie">
            <section>
              <p class="title">Marie</p>
              <p class="subtitle">Les Créations de Marie</p>
              <nav class="level">
                <div class="level-item has-text-centered">
                  <img :src="marieAvatarSrc" class="home-logo"/>
                </div>
                <div class="level-item has-text-centered">
                  <img :src="marieLogoSrc" class="home-logo"/>
                </div>
              </nav>
            </section>
          </router-link>
        </div>
        <div class="column has-text-centered">
          <router-link to="/thibault">
            <section>
              <p class="title">Thibault</p>
              <p class="subtitle">Concepteur-Développeur chez Sopra Steria</p>
              <nav class="level">
                <div class="level-item has-text-centered">
                  <img :src="thibaultAvatarSrc" class="home-logo" />
                </div>
                <div class="level-item has-text-centered">
                  <img :src="thibaultLogoSrc" class="home-logo" />
                </div>
              </nav>
            </section>
          </router-link>
        </div>
      </div>
    </div>
  </section>
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
  .home-logo {
    width: 200px;
  }
</style>

