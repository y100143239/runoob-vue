<template>
  <div>
    <Navigator></Navigator>
    <h2>A03For</h2>
    <ol>
      <li v-bind:key="index" v-for="(site, index) in sites">
        {{site.name}} {{index}}
      </li>
    </ol>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'A03For',
  data () {
    return { 'sites': [
      {name: 'Item1'},
      {name: 'Item2'},
      {name: 'Item3'}
    ]}
  },
  components: {
    Navigator: Navigator
  }
}
</script>

<style scoped>

</style>
