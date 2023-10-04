<script setup lang="ts">
import { useSidebar } from "../composables/useSidebar";

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();
</script>

<template lang="pug">
header.header
  div.flex.items-center
    button.header-menu(@click="isOpen = true")
      svg.w-6.h-6(viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
  div.flex.items-center.justify-between
    div.relative
      button.header-btn(@click="dropdownOpen = !dropdownOpen")
        img.object-cover.w-full.h-full(src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80", alt="Your avatar")
      div(v-show="dropdownOpen" @click="dropdownOpen = false").fixed.inset-0.z-10.w-full.h-full
      transition(v-show="dropdownOpen" enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0")
        div(v-show="dropdownOpen").absolute.right-0.z-20.w-48.py-2.mt-2.bg-white.rounded-md.shadow-xl
          NuxtLink(to="/profile" @click="dropdownOpen = false" class="header-link") Profile
          NuxtLink(to="/" class="header-link") Log out

</template>
