<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-4 text-center">
        <h3>Thibault de Boissieu</h3>
        <img :src="thibaultAvatarSrc" :alt="thibaultAvatarAlt" class="thibault-avatar img-fluid"/>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="col-sm-8 text-center">
            <h2>Développeur full-stack <a href="https://www.soprasteria.com" target="_blank">chez Sopra Steria</a></h2>
            <h6 class="text-justify">
              Je développe sur des technos web telles que NodeJS, AngularJS et sur des technos backend Java, Spring, Hibernate, Postgre.
              Consultez mon profil LinkedIn pour plus d'informations sur mon expérience :
            </h6>
            <a href="https://www.linkedin.com/in/thibault-de-boissieu" target="_blank" class="btn btn-secondary">linkedin.com/thibault-de-boissieu</a>
          </div>
          <div class="col-sm-4 text-center">
            <a href="https://www.linkedin.com/in/thibault-de-boissieu" target="_blank">
              <img :src="linkedinLogoSrc" :alt="linkedinLogoAlt" :title="linkedinLogoTitle" class="thibault-logo img-fluid"/>
            </a>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-4 text-center">
            <a href="https://github.com/tibidibtibo" target="_blank">
              <img :src="githubLogoSrc" :alt="githubLogoAlt" :title="githubLogoTitle" class="thibault-logo img-fluid"/>
            </a>
          </div>
          <div class="col-sm-8 text-center">
            <h2>Développeur à la maison</h2>
            <h6 class="text-justify">
              Une formation d'ingénieur en Électronique-Télécommunications-Informatique,
              pleins d'idées en tête, un PC, une connexion internet, du matériel électronique ...
              Consultez mon repo github pour en savoir plus sur mes réalisations personnelles, ce simple site web par exemple ;-)
            </h6>
            <a href="https://github.com/tibidibtibo" target="_blank" class="btn btn-secondary">github.com/tibidibtibo</a>
          </div>
        </div>
      </div>
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
    padding-top: 5px;
    width: 250px;
  }
</style>
