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
		<el-submenu index="2">
			<template slot="title">产品管理</template>
			<el-menu-item-group title="国内">
				<el-menu-item index="/production">国内游</el-menu-item>
				<el-menu-item index="/production">国内自由行</el-menu-item>
				<el-menu-item index="/production">国内目的地参团</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="境外">
				<el-menu-item index="/production">出境游</el-menu-item>
				<el-menu-item index="/production">赴台游</el-menu-item>
				<el-menu-item index="/production">出境自由行</el-menu-item>
				<el-menu-item index="/production">境外目的地参团</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="其他">
				<el-menu-item index="/production">周边游</el-menu-item>
				<el-menu-item index="/production">玩乐</el-menu-item>
				<el-menu-item index="/production">房掌柜</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">订单管理</template>
			<el-menu-item index="/orders">订单管理</el-menu-item>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title">其他</template>
			<el-menu-item index="/optional-service">可选服务</el-menu-item>
		</el-submenu>
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