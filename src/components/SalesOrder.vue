<template>
  <div class="salesDetails">

    <nav-bar />
    <order-info />
    <sales-order-container />
    <line-items-container />

  </div>
</template>

<script>
  import NavBar from './NavBar.vue';
  import OrderInfo from './OrderInfo';
  import SalesOrderContainer from './SalesOrderContainer';
  import LineItemsContainer from './LineItemsContainer';

  export default {
    components: {
        NavBar,
        OrderInfo,
        SalesOrderContainer,
        LineItemsContainer
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
