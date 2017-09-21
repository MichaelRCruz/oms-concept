<template>
  <div class="salesDetails">

    <nav-bar />
    <order-info />
    <order-details-container />

  </div>
</template>

<script>
  import NavBar from './NavBar.vue';
  import OrderInfo from './OrderInfo';
  import OrderDetailsContainer from './OrderDetailsContainer';

  export default {
    components: {
        NavBar,
        OrderInfo,
        OrderDetailsContainer
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
