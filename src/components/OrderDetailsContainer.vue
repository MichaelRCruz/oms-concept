<template lang="html">

  <div class="container">
    <div class="detailsHeader">
      <span class="containerTitle">
        Order Details
      </span>
      <span class="containerTitle">
        <i class="fa fa-chevron-down toggleArrow" aria-hidden="true"></i>
      </span>
    </div>

    <div class="notification panel">
      <div class="leftPanel">

        <dropdown />
        <text-area />
        <radio-button />
        <input-field />
        <checkbox />

      </div>

      <div class="rightPanel field">

        <dropdown />
        <text-area />
        <input-field />
        <checkbox />

      </div>
    </div>
  </div>


</template>


<script>
  import Dropdown from './fields/Dropdown';
  import TextArea from './fields/TextArea';
  import Checkbox from './fields/checkbox';
  import InputField from './fields/InputField';
  import RadioButton from './fields/RadioButton';

  export default {
    components: {
        Dropdown,
        TextArea,
        Checkbox,
        InputField,
        RadioButton
      },
    data () {
      return {
        zohoData: {}
      }
    },
    methods: {
      fetchA() {
        let _self = this;
        let url = 'https://crm.zoho.com/crm/private/json/Contacts/getMyRecords?authtoken='
        + process.env.API_KEY
        + '&scope=crmapi';
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
                _self.zohoData = data;
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
      }
    },
    beforeMount() {
      // this.fetchA();
      // console.log(this.zohoData);
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
