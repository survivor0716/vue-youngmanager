import Login from './views/Login/login.vue'

import Home from './views/Home/home.vue'

// 
import Account from './views/Account/account.vue'
import AccMyinfo from './views/Account/myinfo/myinfo.vue'
import AccMerchant from './views/Account/merchant/merchant.vue'
import AccManage from './views/Account/manage/manage.vue'
import AccCertification from './views/Account/certification/certification.vue'
import AccMarket from './views/Account/market/market.vue'

// 
import Production from './views/Production/production.vue'
import ProdTour from './views/Production/tour/tour.vue'
import ProdPlay from './views/Production/play/play.vue'
import ProdHotel from './views/Production/hotel/hotel.vue'
import ProdFree from './views/Production/free/free.vue'
import ProdFlight from './views/Production/flight/flight.vue'
import ProdVisa from './views/Production/visa/visa.vue'
import ProdPlayType from './views/Production/play-type/play-type.vue'

// 
import Insurance from './views/Insurance/insurance.vue'
import InsuOrder from './views/Insurance/order/order.vue'

// 
import Contract from './views/Contract/contract.vue'
import ContOrder from './views/Contract/order/order.vue'

// 
import Order from './views/Order/order.vue'
import OrderTour from './views/Order/tour/tour.vue'
import OrderPlay from './views/Order/play/play.vue'
import OrderHotel from './views/Order/hotel/hotel.vue'
import OrderFree from './views/Order/free/free.vue'

// 
import Trade from './views/Trade/trade.vue'
import TradeOrder from './views/Trade/order/order.vue'
import TradeUnsettled from './views/Trade/unsettled/unsettled.vue'
import TradeSettled from './views/Trade/settled/settled.vue'
import TradeAccount from './views/Trade/account/account.vue'
import TradeOverview from './views/Trade/overview/overview.vue'
import TradeRecharge from './views/Trade/recharge/recharge.vue'
import TradeCash from './views/Trade/cash/cash.vue'
import TradeStatement from './views/Trade/statement/statement.vue'

// TODO: Delete
import Provider from './views/Providers/providers.vue'
import Distributor from './views/Distributors/distributors.vue'
import ProductConfig from './views/ProductConfig/product-config.vue'
import OptionalService from './views/OptionalService/optional-service.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        beforeEnter: (to, from, next) => {
            // console.log('in router.js ', to)
            next()
        },
        children: [
            {
                path: 'myinfo',
                name: 'acc-myinfo',
                component: AccMyinfo,
            },
            {
                path: 'merchant',
                name: 'acc-merchant',
                component: AccMerchant,
            },
            {
                path: 'manage',
                name: 'acc-manage',
                component: AccManage,
            },
            {
                path: 'certification',
                name: 'acc-certification',
                component: AccCertification,
            },
            {
                path: 'market',
                name: 'acc-market',
                component: AccMarket,
            }
        ]
    },
    {
        path: '/production',
        name: 'production',
        component: Production,
        children: [
            {
                path: 'tour',
                name: 'prod-tour',
                component: ProdTour
            },
            {
                path: 'play',
                name: 'prod-play',
                component: ProdPlay
            },
            {
                path: 'hotel',
                name: 'prod-hotel',
                component: ProdHotel
            },
            {
                path: 'free',
                name: 'prod-free',
                component: ProdFree
            },
            {
                path: 'flight',
                name: 'prod-flight',
                component: ProdFlight
            },
            {
                path: 'visa',
                name: 'prod-visa',
                component: ProdVisa
            },
            {
                path: 'play-type',
                name: 'prod-play-type',
                component: ProdPlayType
            }
        ]
    },
    {
        path: '/insurance',
        name: 'insurance',
        component: Insurance,
        children: [
            {
                path: 'order',
                name: 'insu-order',
                component: InsuOrder
            }
        ]
    },
    {
        path: '/contract',
        name: 'contract',
        component: Contract,
        children: [
            {
                path: 'order',
                name: 'cont-order',
                component: ContOrder
            }
        ]
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: 'tour',
                name: 'order-tour',
                component: OrderTour,
            },
            {
                path: 'play',
                name: 'order-play',
                component: OrderPlay,
            },
            {
                path: 'hotel',
                name: 'order-hotel',
                component: OrderHotel,
            },
            {
                path: 'free',
                name: 'order-free',
                component: OrderFree,
            },
        ]
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        children: [
            {
                path: 'order',
                name: 'trade-order',
                component: TradeOrder,
            },
            {
                path: 'unsettled',
                name: 'trade-unsettled',
                component: TradeUnsettled,
            },
            {
                path: 'settled',
                name: 'trade-settled',
                component: TradeSettled,
            },
            {
                path: 'account',
                name: 'trade-account',
                component: TradeAccount,
            },
            {
                path: 'overview',
                name: 'trade-overview',
                component: TradeOverview,
            },
            {
                path: 'recharge',
                name: 'trade-recharge',
                component: TradeRecharge,
            },
            {
                path: 'cash',
                name: 'trade-cash',
                component: TradeCash,
            },
            {
                path: 'statement',
                name: 'trade-statement',
                component: TradeStatement,
            },
        ]
    },
    {
        path: '/',
        component: Home,
        children: [
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
            },
            {
                path: 'optional-service',
                name: 'optional-service',
                component: OptionalService,
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]
export default routes