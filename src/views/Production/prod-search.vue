<template>
  <el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>产品类型</p>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="所有类型">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>产品状态</p>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="所有状态">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>出发地</p>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="所有出发地">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>出行天数</p>
      </el-col>
      <el-col :span="4">
        <el-input
          placeholder="请输入"
          v-model="a"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>产品线</p>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="一级区域">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="二级区域">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2" :offset="1" class="text-left">
        <p>高级搜索</p>
      </el-col>
      <el-col :span="8">
        <el-input
          placeholder="请输入产品ID／产品名称／内部名称"
          v-model="a"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="4" :offset="3" class="text-left">
        <el-button type="warning" class="btn-search">查询</el-button>
        <el-button type="text">清空</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'prod-search',
  components: {

  },
  data () {
    return {
      a: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-bg {
  padding: 0;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.btn-search{
  width: 60%;
}
</style>
