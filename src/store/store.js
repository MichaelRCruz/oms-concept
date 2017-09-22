import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stringThing: 'sup, yo',
    sales_order: {
      sales_representative: {
        email: "hello@world.com"
      },
      customer: {
        name: "Bobby Tables",
        shipping_address: {
          shipping_name: "Bobby Tables",
          street1: "87 N Raymond Ave",
          street2: "Suite 229",
          city: "Pasadena",
          state: "California",
          zip: "91103"
        },
        billing_address: {
          billing_name: "Pierre",
          street1: "312 W 5th St",
          street2: "312",
          city: "Los Angeles",
          state: "California",
          zip: "90013"
        }
      },
      line_items: [
        {
          product: "pants",
          quantity: 3,
          price: 12.09
        },
        {
          product: "shirt",
          quantity: 10,
          price: 2.10
        },
        {
          product: "hat",
          quantity: 8,
          price: .09
        },
        {
          product: "shoes",
          quantity: 21,
          price: 1.34
        },
        {
          product: "socks",
          quantity: 1,
          price: 8.99
        }
      ]
    }
  }
});
