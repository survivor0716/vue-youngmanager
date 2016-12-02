<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light" router>
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
			<template slot="title">产品中心</template>
			<el-menu-item-group title="产品库">
				<el-menu-item index="/production">旅游产品管理</el-menu-item>
				<el-menu-item index="/production">玩乐产品管理</el-menu-item>
				<el-menu-item index="/production">酒店产品管理</el-menu-item>
				<el-menu-item index="/production">自由行产品管理</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="产品配置">
				<el-menu-item index="/production">航班管理</el-menu-item>
				<el-menu-item index="/production">签证维护</el-menu-item>
				<el-menu-item index="/production">玩乐产品价格类型管理</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">保险中心</template>
			<el-menu-item index="/insurance-order">保险订单</el-menu-item>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title">合同中心</template>
			<el-menu-item index="/contract-order">合同订单</el-menu-item>
		</el-submenu>
		<el-submenu index="5">
			<template slot="title">订单中心</template>
			<el-menu-item index="/orders">订单管理</el-menu-item>
		</el-submenu>
		<el-submenu index="6">
			<template slot="title">帐户中心</template>
			<el-menu-item-group title="个人设置">
				<el-menu-item index="/account/info">个人信息</el-menu-item>
			</el-menu-item-group>
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