<template>
  <div>
    <!-- Aquí puedes incluir la UI que necesites, por ejemplo, un botón para hacer scroll -->
    <button v-if="showTopButton" @click="scrollToTop">Subir</button>
    <!-- También podrías tener botones para cambiar el modo o el texto -->
    <button @click="changeMode">Cambiar modo</button>
    <button @click="changeThem($event)">Cambiar dirección</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import feather from 'feather-icons'

// Obtener la etiqueta <html> para manipular atributos
const htmlTag = document.getElementsByTagName("html")[0]

// Variable reactiva para controlar la visibilidad del botón de scroll
const showTopButton = ref(false)

// Función para manejar el scroll y actualizar showTopButton
function handleScroll() {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    showTopButton.value = true
  } else {
    showTopButton.value = false
  }
}

// Función para cambiar la dirección del texto (LTR/RTL) según el contenido del botón
function changeThem(event: Event) {
  const target = event.target as HTMLElement
  if (target.innerText === "LTR") {
    htmlTag.dir = "ltr"
  } else {
    htmlTag.dir = "rtl"
  }
}

// Función para alternar el modo (claro/oscuro)
function changeMode() {
  if (htmlTag.className.includes("dark")) {
    htmlTag.className = 'light'
  } else {
    htmlTag.className = 'dark'
  }
}

// Función para hacer scroll al tope de la página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Configuraciones de ciclo de vida
onMounted(() => {
  feather.replace() // Reemplaza los íconos con feather
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para el componente Switcher */
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
