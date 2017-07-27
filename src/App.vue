<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';
  @import '../node_modules/font-awesome/css/font-awesome.css';
</style>
