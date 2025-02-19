<template>
  <!-- Ejemplo de template para la navegación.
       Ajusta este bloque según el HTML que necesites para tu NavLight -->
  <nav id="navbar" class="navigation">
    <!-- Puedes generar dinámicamente la lista de secciones si lo deseas.
         Aquí se muestra un ejemplo mínimo -->
    <ul>
      <li :class="{ active: current === 'section1' }"><NuxtLink to="#section1">Sección 1</NuxtLink></li>
      <li :class="{ active: current === 'section2' }"><NuxtLink to="#section2">Sección 2</NuxtLink></li>
      <li :class="{ active: current === 'section3' }"><NuxtLink to="#section3">Sección 3</NuxtLink></li>
    </ul>
    <!-- Botón de ejemplo para alternar "toggle" -->
    <button @click="handler">Toggle</button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import feather from 'feather-icons'

// Declaración de variables reactivas
const toggle = ref(false)
const current = ref('')
const sectionTop = ref<number | null>(null)

// Si necesitas capturar elementos del DOM, puedes hacerlo dentro de los métodos o en onMounted.
const sections = ref<NodeListOf<HTMLElement> | null>(null)
const navLi = ref<NodeListOf<HTMLElement> | null>(null)

// Función para manejar el evento de scroll y agregar/quitar la clase "is-sticky" al navbar
function handleScroll() {
  const navbar = document.getElementById("navbar")
  if (!navbar) return
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add("is-sticky")
  } else {
    navbar.classList.remove("is-sticky")
  }
}

// Función para actualizar la sección actual y el estado de los elementos de navegación
function onscroll() {
  sections.value = document.querySelectorAll("section") as NodeListOf<HTMLElement>
  sections.value.forEach((section) => {
    sectionTop.value = section.offsetTop
    if (pageYOffset >= (sectionTop.value || 0) - 60) {
      current.value = section.getAttribute("id") || ''
    }
  })
  navLi.value = document.querySelectorAll("nav .container .navigation ul li")
  navLi.value.forEach((li) => {
    if (li.classList.contains(current.value)) {
      li.classList.add("active")
    } else {
      li.classList.remove("active")
    }
  })
}

// Función para alternar la variable "toggle"
function handler() {
  toggle.value = !toggle.value
}

// Gestión de ciclo de vida: agregar y remover listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', onscroll)
  // Si NavLight utiliza íconos, actualiza feather al montar
  feather.replace()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', onscroll)
})
</script>

<style scoped>
/* Ejemplo de estilos para NavLight */
nav {
  background-color: #fff;
  padding: 1rem;
}
nav.is-sticky {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
li.active a {
  font-weight: bold;
  color: #007acc;
}
button {
  margin-left: auto;
}
</style>
