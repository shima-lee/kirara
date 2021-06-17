<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 w-56 lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 py-12 sm:py-16 px-4 sm:px-6 lg:pl-0 lg:pr-8">
    <div class="flex-grow flex flex-col">
      <nav class="px-2 space-y-1 w-56" aria-label="Sidebar">
        <template v-for="item in navigation" :key="item.name">
          <div v-if="!item.children">
            <a :href="item.href" :class="[item.current ? ' text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md']">
              {{ item.name }}
            </a>
          </div>
          <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
            <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : ' text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
              <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
              {{ item.name }}
            </DisclosureButton>
            <DisclosurePanel class="space-y-1">
              <a v-for="subItem in item.children" :key="subItem.name" :href="subItem.href" class="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                {{ subItem.name }}
              </a>
            </DisclosurePanel>
          </Disclosure>
        </template>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  {
    name: 'Team',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  },
  {
    name: 'Calendar',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  },
  {
    name: 'Documents',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  },
  {
    name: 'Reports',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  }
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  setup () {
    const open = ref(false)

    return {
      navigation,
      open
    }
  }
}
</script>
