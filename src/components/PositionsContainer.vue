<template lang="html">
  <div class="orderDetailsContainer">

    <div class="container">

      <div class="detailsHeader">
        <span class="containerTitle">
          Positions
        </span>
        <span class="containerTitle">
          <i class="fa fa-chevron-down toggleArrow" aria-hidden="true"></i>
        </span>
      </div>

      <div class="notification panel">
        <div class="leftPanel">
          <customer-information class="formComponent" />
          <shipping-information class="formComponent" />
          <totals class="formComponent" />
        </div>
        <div class="rightPanel">
          <sales-order-details class="formComponent" />
          <additional-information />
        </div>
      </div>

    </div>

  </div>
</template>


<script>
  import CustomerInformation from './CustomerInformation.vue';
  import ShippingInformation from './ShippingInformation.vue';
  import Totals from './Totals.vue';
  import SalesOrderDetails from './SalesOrderDetails.vue';
  import AdditionalInformation from './AdditionalInformation.vue';

  export default {
    components: {
        CustomerInformation,
        ShippingInformation,
        Totals,
        SalesOrderDetails,
        AdditionalInformation
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


<style scoped>

  .container {
    margin-top: 20px;
    margin-bottom: 70px;
  }

  .panel {
    padding: 0;
    display: flex;
  }

  .leftPanel {
    flex: 0 1 50%;
    height: 100%;
    width: 50%;
    padding: 0 10px 0 10px;
  }

  .rightPanel {
    flex: 0 1 50%;
    height: 100%;
    width: 50%;
    padding: 0 10px 0 10px;
  }

  .formComponent {
    margin-bottom: 20px;
  }

  .detailsHeader {
    height: 23px;
    background-color: #a9a9a9;
    border-radius: 5px 5px 0 0;
  }

  .toggleArrow {
    float: right;
    padding-right: 5px;
  }

  .containerTitle {
    font-weight: bold;
    padding-left: 5px;
  }

</style>
