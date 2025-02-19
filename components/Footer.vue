<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {{ date }}</p>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import feather from 'feather-icons'

// Declaramos la variable reactiva para el año actual
const date = ref(new Date().getFullYear())

// Cuando el componente se monta, llamamos a feather.replace()
onMounted(() => {
  feather.replace()
})
</script>

<style scoped>
/* Puedes agregar estilos personalizados para el footer aquí */
footer {
  /* Ejemplo: */
  font-size: 0.9rem;
}
</style>