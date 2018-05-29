<template>
    <footer class="footer">
        <div class="container">
          <nav class="level">

            <p class="level-item">
              <nav class="level-left">
                <p class="level-item">Suivre Marie sur : </p>
                <p class="level-item">
                  <a href="https://creationsdemarie.fr" target="_blank">
                    <img :src="marieLogoSrc" :alt="marieLogoAlt" :title="marieLogoTitle" class="social-logo">
                  </a>
                </p>
                <p class="level-item">
                  <a href="https://www.facebook.com/aloerevelation/" target="_blank">
                    <img :src="marieLogoForeverSrc" :alt="marieLogoForeverAlt" :title="marieLogoForeverTitle" class="social-logo"/>
                  </a>
                </p>
              </nav>
            </p>

            <p class="level-item"></p>

            <p class="level-item">
              <nav class="level-left">
                <p class="level-item">Suivre Thibault sur : </p>
                <p class="level-item">
                  <a href="https://www.linkedin.com/in/thibault-de-boissieu" target="_blank">
                    <span class="icon is-small">
                      <img :src="linkedinLogoSrc" :alt="linkedinLogoAlt" :title="linkedinLogoTitle" class="social-logo">
                    </span>
                  </a>
                </p>
                <p class="level-item">
                  <a href="https://github.com/tibidibtibo" target="_blank">
                    <span class="icon is-small">
                      <img :src="githubLogoSrc" :alt="githubLogoAlt" :title="githubLogoTitle" class="social-logo">
                    </span>
                  </a>
                </p>
              </nav>
            </p>

          </nav>

          <nav class="level">
            <p class="level-item">
              <router-link class="nav-item is-tab" to="/contact">
                Contact
              </router-link>
            </p>
            <p class="level-item">
              de-boissieu.fr
            </p>
            <p class="level-item">
              {{currentYear}}
            </p>
          </nav>

          <nav class="level">
            <p class="level-item is-small">
              Propulsé avec : Webpack, NodeJS, VueJS et Bulma (et pleins d'autres dépendances !)
            </p>
          </nav>

        </div>
    </footer>
</template>

<script>
  import LinkedinLogo from '../images/social-media-icons/LinkedIn-black.svg'
  import GithubLogo from '../images/social-media-icons/Github-black.svg'
  import MarieLogo from '../images/logo_simple_marie.svg'
  import ForeverLogo from '../images/logo_simple_forever.svg'

  export default {
    data: function () {
      var currentYear = (new Date()).getFullYear()
      console.log(currentYear)
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
    width: 25px;
  }
</style>
