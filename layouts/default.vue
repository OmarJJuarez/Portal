<template>
  <div class="min-h-screen flex flex-col">
    <!-- Encabezado -->
    <header class="bg-gray-800 text-white p-4 text-center">
      <h1 class="text-xl font-bold">Mi Proyecto Nuxt 3</h1>
    </header>

    <!-- Contenido de la Página -->
    <main class="flex-1 p-4">
      <slot />
    </main>

    <!-- Pie de Página -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 - Mi Proyecto</p>
    </footer>
  </div>
</template>
