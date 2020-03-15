<template>
  <div id="app">
    <router-view style="margin-bottom: 60px;"></router-view>
    <Player />
  </div>
</template>

<script>
import Player from '@/components/player'
export default {
  name: 'App',
  components: {
    Player
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
