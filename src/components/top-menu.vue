<template>
  <div class="top-menu">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/production">产品中心</el-menu-item>
      <el-menu-item index="/insurance">保险中心</el-menu-item>
      <el-menu-item index="/contract">合同中心</el-menu-item>
      <el-menu-item index="/order">订单中心</el-menu-item>
      <el-menu-item index="/trade">交易中心</el-menu-item>
      <el-menu-item index="/account">账户中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'topmenu',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.top-menu {
  margin: 0 300px;
}

.el-menu {
  text-align: center;
}
</style>