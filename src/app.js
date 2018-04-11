import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Bonjour à tous !'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
