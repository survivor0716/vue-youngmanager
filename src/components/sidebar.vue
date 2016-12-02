<template>
	<div class="sidebar">
		<ul>
			<li><router-link to="/login">登录</router-link></li>
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/accounts">帐户管理</router-link></li>
			<li><router-link to="/provider">平台商管理</router-link></li>
			<li><router-link to="/distributor">分销商管理</router-link></li>
			<li><router-link to="/prod-config">产品配置</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
.sidebar {
	width: 200px;
	float: left;
}
</style>