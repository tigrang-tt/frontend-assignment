import Router from 'vue-router';
import Layout from 'Components/layout/Layout.vue'
import CompanyData from 'Components/company/CompanyData.vue'
import CompanyPage from 'Components/company/CompanyPage.vue'

const routes =  [
  { path: '', component: Layout,
    children: [
      { path: '', redirect: '/data' },
      { path: '/data', component: CompanyData },
      { path: '/page', component: CompanyPage }
    ]
  }
];

export default new Router({ routes });