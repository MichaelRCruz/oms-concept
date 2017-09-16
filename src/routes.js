import Vue from 'vue';
import SalesOrder from './components/SalesOrder.vue';

export const routes = [
  { path: '/', component: SalesOrder, children: [
    // { path: '/', component: Name },
    // { path: '/portfolio', component: Portfolio },
    // { path: '/resume', component: Resume },
    // { path: '/weblog', component: Weblog }
    ]
  }
]
