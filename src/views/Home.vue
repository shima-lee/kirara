<template>
<!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
          <h1 id="primary-heading" class="sr-only">Home</h1>
          <!-- Your content -->
        </section>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
          <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
            <!-- Your content -->
          </div>
        </aside>
      </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
  }
})
</script>

<style>

</style>
