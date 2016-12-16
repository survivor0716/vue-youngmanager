<template>
  <index :menuData="menuData">
    <router-view></router-view>
  </index>
</template>

<script>
import Index from '../../components/index'

// 获取顶栏、边栏菜单数据
import TradeMenuData from './trade-menu-data.js'

export default {
  name: 'trade',
  components: {
    Index
  },
  data () {
    return {
      menuData: TradeMenuData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
