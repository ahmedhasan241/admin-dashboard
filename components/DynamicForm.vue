<script setup lang="ts">
import useTheme from "~/composables/useTheme";

const { enabled, toggleTheme } = useTheme();

watch(enabled, () => {
  const theme = enabled.value ? "dark" : "light";
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
});
</script>

<template lang="pug">
div
  Switch(v-model="enabled" v-if="enabled !== null" @click="toggleTheme" :class="enabled ? 'bg-gray-800' : 'bg-orange-50'" class="switch")
    span.sr-only Mode setting
    span(aria-hidden="true" :class="enabled ? 'translate-x-9' : 'translate-x-0'" class="pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out my-auto")
        Icon(v-if="enabled" name="emojione-v1:new-moon" class="btn text-gray-300")
        Icon(v-else name="material-symbols:sunny" class="btn text-yellow-500")

</template>
