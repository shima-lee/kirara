<template>
<div>
  <global-header></global-header>
  <router-view></router-view>
  <global-footer></global-footer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  }
})
</script>

<style>
</style>
