const menuData = {
  header: [],
  sidebar: [
    {
      title: '交易管理',
      index: '1',
      children: [
        {
          title: '交易订单',
          index: '/trade/order'
        }
      ]
    },
    {
      title: '结算管理',
      index: '2',
      children: [
        {
          title: '未结算查询',
          index: '/trade/unsettled'
        },
        {
          title: '已结算查询',
          index: '/trade/settled'
        }
      ]
    },
    {
      title: '交易设置',
      index: '3',
      children: [
        {
          title: '结算账户设置',
          index: '/trade/account'
        }
      ]
    },
    {
      title: '资金管理',
      index: '4',
      children: [
        {
          title: '资金概况',
          index: '/trade/overview'
        },
        {
          title: '充值',
          index: '/trade/recharge'
        },
        {
          title: '提现',
          index: '/trade/cash'
        },
        {
          title: '资金流水',
          index: '/trade/statement'
        }
      ]
    }
  ]
}

export default menuData
