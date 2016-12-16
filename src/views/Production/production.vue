<template>
  <index :menuData="menuData">
    <router-view></router-view>
  </index>
</template>

<script>
import Index from '../../components/index'
import ProdTitle from './prod-title'
import ProdSearch from './prod-search'
import ProdList from './prod-list'

// 获取顶栏、边栏菜单数据
import ProdMenuData from './prod-menu-data.js'

export default {
  name: 'production',
  components: {
    Index,
    ProdTitle,
    ProdSearch,
    ProdList
  },
  data () {
    return {
      menuData: ProdMenuData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
