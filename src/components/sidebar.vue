<template>
	<el-menu default-active="1" :default-openeds="openeds" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light" router>
		<el-submenu v-for="item in sidebarData" :index="item.index">
			<template slot="title">{{item.title}}</template>
			<el-menu-item v-for="i in item.children" :index="i.index">{{i.title}}</el-menu-item>
		</el-submenu>
   </el-menu>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['sidebarData'],
  computed: {
    // 默认展开所有菜单
    openeds () {
      // TODO: 转为ES6
      var arr = []
      for(var i in this.sidebarData) {
        arr.push(this.sidebarData[i].index)
      }
      return arr
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  created () {

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