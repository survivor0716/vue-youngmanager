<template>
  <div class="index">
    <el-row type="flex" :align="middle">
      <el-col class="header">
        <my-header></my-header>
      </el-col>
    </el-row>
    <el-row class="main">
      <el-col :span="3" class="sidebar">
        <my-sidebar></my-sidebar>
      </el-col>
      <el-col :span="21" class="views">
        <router-view></router-view>
      </el-col>
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

export default {
  name: 'index',
  components: {
    MyHeader,
    MySidebar,
    MyFooter
  },
  data () {
    return {

    }
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
}

.main {
  height: 100%;
  padding-top: 120px;
  margin-top: -120px;
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
