<!--
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const images = ref([])

// Cargar imágenes desde Strapi
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/carrusels?populate=*')

    // Verifica que hay datos en la respuesta
    if (response.data?.data?.length) {
      images.value = response.data.data.flatMap(item =>
          item.carrusel.map(img => ({
            src: `http://localhost:1337${img.url}`,
            alt: img.name || 'Imagen sin título'
          }))
      )
    }
  } catch (error) {
    console.error('Error al cargar imágenes desde Strapi:', error)
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-center text-2xl font-bold text-white bg-gray-800 p-4">Carrusel con Strapi</h2>

    <div v-if="images.length > 0" class="relative">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500">
          <NuxtImg v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt"
                   class="w-full object-cover rounded-lg" />
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">Cargando imágenes...</div>
  </div>
</template>
-->
<!--
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const images = ref([])
const errorMessage = ref('')
const isLoading = ref(true)

// Usar variable de entorno para la URL base
const apiBaseUrl = process.env.NUXT_STRAPI_URL || 'http://localhost:1337'

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/carrusels?populate=*`)
    if (response.data?.data?.length) {
      images.value = response.data.data.flatMap(item => {
        // Validar que 'carrusel' exista y sea un arreglo
        return Array.isArray(item.carrusel)
            ? item.carrusel.map((img: any) => ({
              src: `${apiBaseUrl}${img.url}`,
              alt: img.name || 'Imagen sin título'
            }))
            : []
      })
    } else {
      errorMessage.value = 'No se encontraron imágenes.'
    }
  } catch (error) {
    console.error('Error al cargar imágenes desde Strapi:', error)
    errorMessage.value = 'Error al cargar imágenes.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-center text-2xl font-bold text-white bg-gray-800 p-4">Carrusel con Strapi</h2>
    <div v-if="isLoading" class="text-center text-gray-500">Cargando imágenes...</div>
    <div v-else-if="errorMessage" class="text-center text-red-500">{{ errorMessage }}</div>
    <div v-else-if="images.length > 0" class="relative">
      &lt;!&ndash; Aquí podrías implementar la lógica del carrusel &ndash;&gt;
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500">
          <NuxtImg v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt"
                   class="w-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">No hay imágenes para mostrar.</div>
  </div>
</template>
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Estado para las imágenes y posibles errores
const images = ref([])

// Accedemos a las variables globales definidas en nuxt.config.ts
const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl  // Usamos la variable configurada

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/carrusels?populate=*`)

    // Verificamos que la respuesta tenga datos
    if (response.data?.data?.length) {
      images.value = response.data.data.flatMap(item =>
          // Validamos que 'carrusel' sea un arreglo
          Array.isArray(item.carrusel)
              ? item.carrusel.map((img: any) => ({
                src: `${apiBaseUrl}${img.url}`,
                alt: img.name || 'Imagen sin título'
              }))
              : []
      )
    }
  } catch (error) {
    console.error('Error al cargar imágenes desde Strapi:', error)
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-center text-2xl font-bold text-white bg-gray-800 p-4">
      Carrusel con Strapi
    </h2>
    <div v-if="images.length > 0" class="relative">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500">
          <NuxtImg
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">Cargando imágenes...</div>
  </div>
</template>