<template>
  <div class="salesDetails">

    <nav-bar />
    <sales-order-container />
    <line-items-container />

  </div>
</template>

<script>
  import NavBar from './NavBar.vue';
  import SalesOrderContainer from './SalesOrderContainer';
  import LineItemsContainer from './LineItemsContainer';

  export default {
    components: {
        NavBar,
        SalesOrderContainer,
        LineItemsContainer
      },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
