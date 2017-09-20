<template>
  <div>


    <router-view></router-view>


  </div>
</template>

<script>
  import SalesOrder from './components/SalesOrder.vue';

  export default {
    components: {
      'sales-order': SalesOrder
    }
  }
</script>

<style>

</style>
