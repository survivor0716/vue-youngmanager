<template>
  <index :menuData="menuData">

  </index>
</template>

<script>
import Index from '../../components/index'

// TODO: 获取顶栏、边栏菜单数据


export default {
  name: 'contract',
  components: {
    Index
  },
  data () {
    return {
      menuData: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
