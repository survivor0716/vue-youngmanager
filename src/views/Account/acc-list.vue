<template>
  <el-table
    :data="tableData"
    height="300"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180"
      align="left">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
      align="left">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="left">
    </el-table-column>
    <el-table-column
      inline-template
      :context="_self"
      label="操作"
      width="100">
      <span>
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </span>
    </el-table-column>
    <el-table-column
      inline-template
      label="下拉操作"
      width="160"
      align="left">
      <acc-dropdown></acc-dropdown>
    </el-table-column>
  </el-table>
</template>

<script>
import AccDropdown from './acc-dropdown'

export default {
  name: 'AccList',
  components: {
    AccDropdown
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-05',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-09',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleClick() {
      console.log(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
