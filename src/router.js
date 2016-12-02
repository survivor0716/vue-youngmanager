import Login from './views/Login/login.vue'

import Index from './views/index.vue'

import Home from './views/Home/home.vue'

import Accounts from './views/Accounts/accounts.vue'

import Provider from './views/Providers/providers.vue'

import Distributor from './views/Distributors/distributors.vue'

import ProductConfig from './views/ProductConfig/product-config.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'accounts',
                name: 'accounts',
                component: Accounts,
            },
            {
                path: 'provider',
                name: 'provider',
                component: Provider,
            },
            {
                path: 'distributor',
                name: 'distributor',
                component: Distributor,
            },
            {
                path: 'prod-config',
                name: 'prod-config',
                component: ProductConfig,
            }
        ]
    }
]
export default routes;