<script setup>
import { useSidebar } from "../composables/useSidebar";

const { isOpen } = useSidebar();
</script>

<style scoped></style>

<template lang="pug">
div.flex
  div(:class="isOpen ? 'block' : 'hidden'" class="sidebar" @click="isOpen = false")
  div(:class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="sidebar-contain fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-100 dark:bg-gray-900 lg:translate-x-0 lg:static lg:inset-0")
    div.flex.items-center.justify-center.mt-8.mb-15
      div.flex.items-center
        span(class="mx-4 text-2xl font-semibold dark:text-white text-gray-900" ) Dashboard
        DynamicForm(class="mx-3 my-auto")
    nav.mt-10
      NuxtLink(@click="isOpen = false" class="flex items-center px-6 py-2 mt-4 duration-200 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100" to="/dashboard")
        svg.w-5.h-5(viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor")
          path(d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor")
        span.mx-4 Dashboard
      NuxtLink(@click="isOpen = false" class="flex items-center px-6 py-2 mt-4 duration-200 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100" to="/usermanagement")
        Icon(class="w-5 h-5" name="material-symbols:person-3")
        span.px-4 User management
      NuxtLink(@click="isOpen = false" class="flex items-center px-6 py-2 mt-4 duration-200 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100" to="/productmanagement")
        Icon(class="w-5 h-5" name="eos-icons:product-subscriptions")
        span.mx-4 Product Management
      NuxtLink(@click="isOpen = false" class="flex items-center px-6 py-2 mt-4 duration-200 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100" to="/orderhistory")
        Icon(class="w-5 h-5" name="icon-park-solid:history-query")
        span.mx-4 Order History

</template>
