<template lang="html">

  <div class="container">
    <div class="detailsHeader">
      <span class="containerTitle">
        Sales Order Details
      </span>
      <span class="containerTitle">
        <i class="fa fa-chevron-down toggleArrow" aria-hidden="true"></i>
      </span>
    </div>

    <div class="notification panel">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Product">Product</abbr></th>
            <th><abbr title="Won">Quantity</abbr></th>
            <th><abbr title="Drawn">Price</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification</th>
          </tr>
        </thead>
        <!-- <tfoot>
          <tr>
            <th><abbr title="Product">Product</abbr></th>
            <th><abbr title="Won">Quantity</abbr></th>
            <th><abbr title="Drawn">Price</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification</th>
          </tr>
        </tfoot> -->
        <tbody>
          <tr>
            <td>
              <drop-down />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td>
              <input-field />
            </td>
            <td><input-field /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>


<script>
  import InputField from './lineItemFields/InputField';
  import DropDown from './lineItemFields/DropDown';
  import { eventBus } from '../main';

  export default {
    components: { InputField, DropDown },
    data () {
      return {
        line_items: {}
      }
    },
    methods: {

    },
    created() {
      eventBus.$on('here-is-data', shipping_carriers => {
        console.log('hello, event bus', shipping_carriers);
      });
    },
    beforeMount() {
      console.log(this.$store.state.stringThing);
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
    padding: 20px 0 20px 0;
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
