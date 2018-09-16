<template>
  <div>
    <Navigator></Navigator>
    <h2>A01Template</h2>
    <p>{{message}}</p>
  </div>
</template>
<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'A01Template',
  data () {
    return {
      msg: 'A01Template'
    }
  },
  components: {
    Navigator: Navigator
  }
}
</script>
