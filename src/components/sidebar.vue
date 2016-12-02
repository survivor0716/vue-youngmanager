<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
		<el-submenu index="1">
			<template slot="title">导航一</template>
			<el-menu-item index="/login">登录</el-menu-item>
			<el-menu-item index="/">首页</el-menu-item>
			<el-menu-item index="/accounts">帐户管理</el-menu-item>
			<el-menu-item index="/provider">平台商管理</el-menu-item>
			<el-menu-item index="/distributor">分销商管理</el-menu-item>
			<el-menu-item index="/prod-config">产品配置</el-menu-item>
		</el-submenu>
		<el-menu-item index="2">导航二</el-menu-item>
		<el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
	  handleOpen(key, keyPath) {
	    console.log(key, keyPath);
	  },
	  handleClose(key, keyPath) {
	    console.log(key, keyPath);
  }
}
}
</script>

<style>
.sidebar {
	width: 200px;
	float: left;
}
</style>