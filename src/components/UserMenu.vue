<template>
  <div class="userMenu">

    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Profile Menu</span>
          <span class="icon is-small">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            Logout
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.userMenu {
  margin-right: 50px;
}

</style>
