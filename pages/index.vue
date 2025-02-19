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