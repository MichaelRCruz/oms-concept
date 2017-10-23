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
      <div class="leftPanel">

        <text-box />

      </div>

      <div class="rightPanel field">

        <input-field />

      </div>
    </div>
  </div>

</template>


<script>
  import { mapGetters } from 'vuex';

  import Dropdown from './fields/Dropdown';
  import TextBox from './fields/TextBox';
  import Checkbox from './fields/checkbox';
  import InputField from './fields/InputField';
  import RadioButton from './fields/RadioButton';
  import { store } from '../store/store';
  import { eventBus } from '../main';


  export default {
    components: { Dropdown, TextBox, Checkbox, InputField, RadioButton },
    data () {
      return {
        shipping_carriers: ['FedEx', 'UPS', 'USPS']
      }
    },

    computed: {
      ...mapGetters(['customer']),
    },
    methods: {

      // TODO: Move these fetches out of the component.
      // TODO: They should be actions in your Vuex store.
      fetchA() {
        let _self = this;
        let url = ''
        fetch(url, {
          headers: {
            "Content-Type": "text/plain"
          }
        })
          .then(
            function(response) {
              console.log(response);
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              // Examine the text in the response
              response.json().then(function(data) {
                console.log('cool', data);
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
      }
    },
    mounted() {
      // this.fetchA();
      // console.log(this.zohoData);
      // console.log(this.$store.state.stringThing);
      console.log(this.customer.shipping_address.shipping_name);
      // eventBus.$emit('here-is-data', this.shipping_carriers);
    },
    beforeMount() {
      console.log('')
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
