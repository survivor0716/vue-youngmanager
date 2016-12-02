<template>
  <div class="index">
    <el-row type="flex" :align="middle">
      <el-col class="header">
        <my-header></my-header>
      </el-col>
    </el-row>
    <el-row class="nav">
      <el-col>
        <my-header></my-header>
      </el-col>
    </el-row>
    <el-row class="main">
      <el-card>
        <el-row>
          <el-col :span="3" class="sidebar">
            <my-sidebar :sidebar-data="sidebarData"></my-sidebar>
          </el-col>
          <el-col :span="21" class="views">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row>
        <el-col class="footer">
          <my-footer></my-footer>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import MyHeader from '../components/header'
import MySidebar from '../components/sidebar'
import MyFooter from '../components/footer'
import data from './Accounts/acc-sidebar-data.js'

export default {
  name: 'index',
  props: ['routeData'],
  data () {
    return {
      headerData: null,
      sidebarData: null,
      footerData: null,
      userData: null
    }
  },
  components: {
    MyHeader,
    MySidebar,
    MyFooter
  },
  /**
  *   在导航完成前获取数据

  *   通过这种方式，我们在导航转入新的路由前获取数据。
  *   我们可以在接下来的组件的beforeRouteEnter 钩子中获取数据，当数据获取成功后只调用 next 方法。
  **/
  beforeRouteEnter (to, from, next) {
    console.log('index.vue beforeRouteEnter')
    next(vm => {
      console.log('index.vue next')
      vm.sidebarData = data
    })
  },
  created () {
    console.log('index.vue created', this.routeData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  height: 100%;
}

.header {
  height: 60px;
  background-color: #2f373a;
  z-index: 1;
}

.nav {
  height: 60px;
  background-color: #fff;
  z-index: 1;
}

.main {
  height: 100%;
  padding-top: 180px;
  margin-top: -180px;
  background-color: #e1e2e6;
}

.main .el-card {
  width: 1600px;
  margin: 30px auto 0;
  padding: 0;
}

.main .el-card .el-row {
  margin: -20px;
}

.sidebar {
  height: 100%;
  overflow-y: auto;
  background-color: #eff2f7;
  text-align: left;
}

.footer {
  background-color: #a8aaa9;
  color: #333;
}

.views {
  height: 100%;
  padding: 20px;
  overflow: auto;
}
</style>
