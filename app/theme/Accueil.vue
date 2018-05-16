<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Bienvenue</p>
          <p>Si vous souhaitez en savoir plus sur les talents de création de Marie ou sur les compétences de développement de Thibault, nous vous invitons à sélectionner l'un des liens suivants :</p>
        </div>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">Marie</p>
          <p>Les Créations de Marie</p>
          <img :src="marieLogoSrc" />
        </div>
        <div class="tile is-child box">
          <p class="title">Thibault</p>
          <p>Concepteur-Développeur chez Sopra Steria</p>
          <img :src="thibaultLogoSrc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarieLogo from '../images/photo_marie.jpg'
  import ThibaultLogo from '../images/computer.svg'
  export default {
    data: function () {
      return {
        marieLogoSrc: MarieLogo,
        thibaultLogoSrc: ThibaultLogo
      }
    }
  }
</script>
