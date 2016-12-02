<template>
  <el-dropdown size="small" split-button type="text" trigger="click" @click="handleClick">
    更多菜单
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>查看</el-dropdown-item>
      <el-dropdown-item>编辑</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'AccDropdown',
  components: {

  },
  data () {
    return {
      
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
