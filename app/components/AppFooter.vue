<template>
  <div class="footer-container bg-light">
    <div class="row text-center footer-text-sm">
      <div class="col-sm">
        Suivre Marie sur
        <a href="https://creationsdemarie.fr" target="_blank">
          <img :src="marieLogoSrc" :alt="marieLogoAlt" :title="marieLogoTitle" class="social-logo">
        </a>
        <a href="https://www.facebook.com/aloerevelation/" target="_blank">
          <img :src="marieLogoForeverSrc" :alt="marieLogoForeverAlt" :title="marieLogoForeverTitle" class="social-logo"/>
        </a>
      </div>
      <div class="col-sm">
        Suivre Thibault sur
        <a href="https://www.linkedin.com/in/thibault-de-boissieu" target="_blank">
          <img :src="linkedinLogoSrc" :alt="linkedinLogoAlt" :title="linkedinLogoTitle" class="social-logo">
        </a>
        <a href="https://github.com/tibidibtibo" target="_blank">
          <img :src="githubLogoSrc" :alt="githubLogoAlt" :title="githubLogoTitle" class="social-logo">
        </a>
      </div>
    </div>
    <hr>
    <div class="row text-center footer-text-sm">
      <div class="col-sm">
        Propulsé par <a href="https://nodejs.org" target="_blank">NodeJS</a>,
        <a href="https://vuejs.org" target="_blank">VueJS</a>,
        <a href="https://webpack.js.org" target="_blank">Webpack</a>,
        <a href="https://sass-lang.com" target="_blank">Sass</a>,
        <a href="https://bulma.io" target="_blank">Bulma</a> (et beaucoup d'autres dépendances !)
      </div>
    </div>
    <hr>
    <div class="row text-center footer-text-sm">
      <div class="col-sm">
         <router-link class="navbar-item is-tab" to="/contact">
          Contact
        </router-link>
      </div>
      <div class="col-sm">
        de-boissieu.fr
      </div>
      <div class="col-sm">
        {{currentYear}}
      </div>
    </div>
  </div>
</template>

<script>
  import LinkedinLogo from '../images/social-media-icons/LinkedIn-black.svg'
  import GithubLogo from '../images/social-media-icons/Github-black.svg'
  import MarieLogo from '../images/logo_simple_marie.svg'
  import ForeverLogo from '../images/logo_simple_forever.svg'

  export default {
    data: function () {
      var currentYear = (new Date()).getFullYear()
      return {
        linkedinLogoSrc: LinkedinLogo,
        linkedinLogoAlt: 'Linkedin Logo',
        linkedinLogoTitle: 'Profil LinkedIn de Thibault',
        githubLogoSrc: GithubLogo,
        githubLogoAlt: 'Github Logo',
        githubLogoTitle: 'Profil Github de Thibault',
        marieLogoSrc: MarieLogo,
        marieLogoAlt: 'Les Créations de Marie Logo',
        marieLogoTitle: 'Site creationsdemarie.fr',
        marieLogoForeverSrc: ForeverLogo,
        marieLogoForeverAlt: 'Forever Logo',
        marieLogoForeverTitle: 'Page Facebook aloerevelation',
        currentYear: currentYear
      }
    }
  }
</script>

<style lang="scss">
  .social-logo {
    height: 15px;
  }
  .footer-text-sm {
    font-size: 0.8em;
  }
  .footer-container {
    padding-top: 80px;
    padding-bottom: 20px;
  }
</style>
