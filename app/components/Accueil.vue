<template>
  <div class="container">

    <div class="jumbotron">
      <h1 class="display-4">Salutations !</h1>
      <p class="lead">Si vous souhaitez en savoir plus sur les talents de création de Marie ou sur les compétences de développement de Thibault, nous vous invitons à sélectionner l'un des liens suivants
      </p>
    </div>

    <div class="container">
      <div class="row text-center">
        <div class="col-sm">
          <router-link to="/marie" class="deco-none">
            <div class="card home-link-width">
              <img class="card-img-top home-link-img" :src="marieAvatarSrc"/>
              <!-- <img class="card-img-top home-link-img mr-auto" :src="marieLogoSrc"/> -->
              <div class="card-body">
                <h5 class="card-title">Marie</h5>
                <p class="card-text">Les Créations de Marie</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/thibault" class="deco-none">
            <div class="card home-link-width">
              <img class="card-img-top home-link-img" :src="thibaultAvatarSrc"/>
              <!-- <img class="card-img-top home-link-img mr-auto" :src="thibaultLogoSrc"/> -->
              <div class="card-body">
                <h5 class="card-title">Thibault</h5>
                <p class="card-text">Concepteur-Développeur chez Sopra Steria</p>
              </div>
            </div>
          </router-link>
        </div>
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

  .home-link-img {
    width: 250px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .home-link-img:hover {
    opacity: 0.6;
  }

  .home-link-width {
    opacity: 1;
  }

</style>

