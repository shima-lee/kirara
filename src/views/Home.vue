<template>
  <div class="mt-8 max-w-2x flex-1 mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
    <div class="space-y-6 lg:col-start-1 lg:col-span-2">
      <comments></comments>
    </div>
    <!-- Timeline -->
  <timeline-list></timeline-list>
  </div>
</template>

<script>
import TimelineList from '@/components/TimelineList.vue'
import { defineComponent } from 'vue'
import Comments from '../components/Comments.vue'
import DescriptionList from '../components/DescriptionList.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Comments,
    TimelineList
  }
})
</script>

<style>

</style>
