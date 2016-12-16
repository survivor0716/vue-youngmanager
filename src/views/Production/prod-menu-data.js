const menuData = {
  header: [],
  sidebar: [
    {
      title: '产品库',
      index: '1',
      children: [
        {
          title: '旅游产品管理',
          index: '/production/tour'
        },
        {
          title: '玩乐产品管理',
          index: '/production/play'
        },
        {
          title: '酒店产品管理',
          index: '/production/hotel'
        },
        {
          title: '自由行产品管理',
          index: '/production/free'
        }
      ]
    },
    {
      title: '产品配置',
      index: '2',
      children: [
        {
          title: '航班管理',
          index: '/production/flight'
        },
        {
          title: '签证维护',
          index: '/production/visa'
        },
        {
          title: '玩乐产品价格类型',
          index: '/production/play-type'
        }
      ]
    }
  ]
}

export default menuData
