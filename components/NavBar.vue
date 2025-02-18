<template>
  <nav class="bg-blue-600 p-4">
    <div class="flex justify-between items-center">
      <h1 class="text-white text-xl">Mi Proyecto</h1>
      <button @click="toggleMenu" class="text-white md:hidden">☰</button>
    </div>
    <ul v-show="isOpen" class="md:flex hidden space-x-4">
      <li><a href="/" class="text-white">Inicio</a></li>
      <li><a href="/about" class="text-white">Nosotros</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
</script>
