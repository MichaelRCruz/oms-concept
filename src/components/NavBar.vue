<template>

  <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
    <a class="navbar-item">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Sales Orders
        </a>

        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 0.5.3
          </div>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Purchase Orders
        </a>

        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 0.5.3
          </div>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Invoices
        </a>

        <!-- <div class="navbar-dropdown is-boxed">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 0.5.3
          </div>
        </div> -->
      </div>
    </div>

    <div class="navbar-end">
        <!-- navbar items -->
    </div>

  </nav>

</template>

<script>
import UserMenu from './UserMenu.vue';

export default {
  components: {
      UserMenu
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
