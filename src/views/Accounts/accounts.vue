<template>
  <div class="content">
    <el-row>
      帐户管理相关内容
    </el-row>
    <el-row>
      <acc-search></acc-search>
    </el-row>
    <el-row>
      <acc-list></acc-list>
    </el-row>
    <el-row type="flex" justify="end">
      <acc-pagination></acc-pagination>
    </el-row>
  </div>
</template>

<script>
import AccSearch from './acc-search'
import AccList from './acc-list'
import AccPagination from './acc-pagination'

export default {
  name: 'accounts',
  components: {
    AccSearch,
    AccList,
    AccPagination
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding: 20px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
