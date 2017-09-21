import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    salesOrder: {
      salesOrderNumber: 10001,
      customer: {
        name: "Bobby Tables",
        address: {
          street: "87 N Raymond Ave",
          city: "Pasadena",
          state: "California",
          zip: "90013"
        }
      }
    }
  }
});
