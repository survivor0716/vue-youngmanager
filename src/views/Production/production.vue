<template>
  <div>
    <prod-title></prod-title>

    <prod-search></prod-search>

    <prod-list></prod-list>
    <acc-list></acc-list>
  </div>
</template>

<script>
import ProdTitle from './prod-title.vue'
import ProdSearch from './prod-search.vue'
import ProdList from './prod-list.vue'

//temp
import AccList from '../Accounts/acc-list.vue'

export default {
  name: 'production',
  components: {
    ProdTitle,
    ProdSearch,
    ProdList,
    AccList
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
