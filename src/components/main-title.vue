<template>
  <el-row type="flex" class="row-bg" justify="space-between" align="middle">
    <el-col :span="4">
      <div class="">
        <h3><slot>未定义title</slot></h3>
      </div>
    </el-col>
    <!-- <el-col :span="6">
        <el-button type="warning">新增旅游产品</el-button>
    </el-col> -->
  </el-row>
</template>

<script>
export default {
  name: 'main-title',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-bg {
  border-bottom: 2px solid #ccc;
}
</style>
