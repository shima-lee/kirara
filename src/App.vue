<template>
<div class=" bg-gray-100">
  <global-header></global-header>
  <main class="flex">
    <slider-bar></slider-bar>
    <router-view></router-view>
  </main>
  <global-footer></global-footer>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import SliderBar from './components/SliderBar.vue'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter,
    SliderBar
  }
})
</script>

<style>
</style>
