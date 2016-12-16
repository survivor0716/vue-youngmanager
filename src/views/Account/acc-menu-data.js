const menuData = {
  header: [],
  sidebar: [
    {
      title: '个人设置',
      index: '1',
      children: [
        {
          title: '个人信息',
          index: '/account/myinfo'
        }
      ]
    },
    {
      title: '帐户设置',
      index: '2',
      children: [
        {
          title: '商户信息',
          index: '/account/merchant'
        },
        {
          title: '员工帐号管理',
          index: '/account/manage'
        },
        {
          title: '认证信息',
          index: '/account/certification'
        }
      ]
    },
    {
      title: '存管账户设置',
      index: '3',
      children: [
        {
          title: '存管账户信息',
          index: '/account/market'
        }
      ]
    }
  ]
}

export default menuData
