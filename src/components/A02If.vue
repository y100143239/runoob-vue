<template>
  <div id="A02If">
    <Navigator></Navigator>
    <h2>A02If</h2>
    <input type="checkbox" v-model="ok">
    <div v-if="ok">
      <h1>菜鸟教程</h1>
    </div>
    <div v-else>
      <h1>不是菜鸟了</h1>
    </div>
    <div v-show="ok">
      <h1>v-show</h1>
    </div>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'A02If',
  data () {
    return {
      ok: true
    }
  },
  components: {Navigator: Navigator}
}
</script>

<style scoped>

</style>
