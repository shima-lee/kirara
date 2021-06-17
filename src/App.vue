<template>
  <div class="h-screen overflow-hidden bg-gray-100 flex flex-col">
    <global-header></global-header>
    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <slider-bar></slider-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import SliderBar from './components/SliderBar.vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default {
  components: {
    SliderBar,
    GlobalHeader
  },
  setup () {
    return {
    }
  }
}
</script>
