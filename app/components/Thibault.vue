<template>
  <div class="tile is-ancestor">
	  <div class="tile is-parent is-4">
		  <article class="tile is-child has-text-centered box">
		    <p class="title">Thibault de Boissieu</p>
		    <img :src="thibaultAvatarSrc" :alt="thibaultAvatarAlt" class="thibault-avatar"/>
      </article>
	  </div>
	  <div class="tile is-parent is-8 is-vertical">
		  <article class="tile is-child has-text-centered box">
		    <p class="title">Développeur full-stack <a href="https://www.soprasteria.com" target="_blank">chez Sopra Steria</a></p>
		    <p class="subtitle has-text-justified">Je développe sur des technos web telles que NodeJS, AngularJS et sur des technos backend Java, Spring, Hibernate, Postgre.
          <br/>Consultez mon profil LinkedIn pour plus d'informations sur mon expérience : </p>
        <a href="https://www.linkedin.com/in/thibault-de-boissieu" target="_blank">
          <img :src="linkedinLogoSrc" :alt="linkedinLogoAlt" :title="linkedinLogoTitle" class="thibault-logo"/>
        </a>
		  </article>
      <article class="tile is-child has-text-centered box">
          <p class="title">Développeur à la maison</p>
          <p class="subtitle has-text-justified">Une formation d'ingénieur en Électronique-Télécommunications-Informatique,
            pleins d'idées en tête, un PC, une connexion internet, du matériel électronique ...
            <br/>Consultez mon repo github pour en savoir plus sur mes réalisations personnelles :</p>
          <a href="https://github.com/tibidibtibo" target="_blank">
            <img :src="githubLogoSrc" :alt="githubLogoAlt" :title="githubLogoTitle" class="thibault-logo"/>
          </a>
      </article>
	  </div>
  </div>
</template>

<script>
  import ThibaultAvatar from '../images/photo_thibault.jpg'
  import LinkedinLogo from '../images/social-media-icons/LinkedIn-black.svg'
  import GithubLogo from '../images/social-media-icons/Github-black.svg'

  export default {
    data: function () {
      return {
        thibaultAvatarSrc: ThibaultAvatar,
        thibaultAvatarAlt: 'Thibault Picture',
        linkedinLogoSrc: LinkedinLogo,
        linkedinLogoAlt: 'Linkedin Logo',
        linkedinLogoTitle: 'Profil LinkedIn de Thibault',
        githubLogoSrc: GithubLogo,
        githubLogoAlt: 'Github Logo',
        githubLogoTitle: 'Profil Github de Thibault'
      }
    }
  }
</script>

<style lang="scss">
  .thibault-avatar {
    width: 200px;
  }
  .thibault-logo {
    width: 250px;
  }
</style>
