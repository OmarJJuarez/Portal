
<template>
  <div>
    <NavLight />
    <!-- Resto de la plantilla -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import image1 from '../assets/images/bg/1.jpg'
import NavLight from '@/components/NavLight.vue'
import About from '@/components/About.vue'
// ...otros imports

// Definir estados y métodos usando Composition API
const isActive = ref(false)
const images = ref([
  { id: 1, src: image1 }
])

function toggle() {
  isActive.value = !isActive.value
}
</script>

<style scoped>
/* Tus estilos aquí */
</style>



<!--<template>
  <div data-v-inspector="pages/index.vue:2:5">
    <NavLight data-v-inspector="pages/index.vue:3:9" />

    <section class="relative table w-full py-36 lg:py-64 overflow-hidden" id="home" data-v-inspector="pages/index.vue:5:9">
      <div class="absolute inset-0 overflow-hidden" data-v-inspector="pages/index.vue:6:13">
        <div
            v-for="image in images"
            :key="image.id"
            class="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover"
            data-v-inspector="pages/index.vue:7:17">
          <img :src="image.src" alt="" data-v-inspector="pages/index.vue:8:21">
        </div>
      </div>
      <div class="absolute inset-0 bg-black/70" data-v-inspector="pages/index.vue:10:13"></div>
      <div class="container relative" data-v-inspector="pages/index.vue:12:13">
        <div class="grid grid-cols-1 text-center" data-v-inspector="pages/index.vue:13:17">
          <div class="text-center" data-v-inspector="pages/index.vue:14:21">
            <a href="#!" @click="toggle"
               class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white" data-v-inspector="pages/index.vue:15:25">
              <i class="mdi mdi-play inline-flex items-center justify-center text-2xl" data-v-inspector="pages/index.vue:17:29"></i>
            </a>
          </div>
          <h4 class="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5" data-v-inspector="pages/index.vue:21:21">
            We Collaboration Easy & Fast
          </h4>
          <p class="text-white/70 text-lg max-w-xl mx-auto" data-v-inspector="pages/index.vue:25:21">
            This is just a simple text made for this unique and awesome template, you can replace it with any text.
          </p>
          <div class="relative mt-8" data-v-inspector="pages/index.vue:28:21">
            <a href=""
               class="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white" data-v-inspector="pages/index.vue:29:25">
              Get Started
            </a>
          </div>
        </div>
      </div>&lt;!&ndash;end container&ndash;&gt;
    </section>&lt;!&ndash;end section&ndash;&gt;
    <div class="relative" data-v-inspector="pages/index.vue:36:9">
      <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0" data-v-inspector="pages/index.vue:37:13">
        <a href="#about" data-v-inspector="pages/index.vue:38:17">
          <i class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800" data-v-inspector="pages/index.vue:38:34"></i>
        </a>
      </div>
      <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900" data-v-inspector="pages/index.vue:42:13">
        <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="pages/index.vue:44:17">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" data-v-inspector="pages/index.vue:46:21"></path>
        </svg>
      </div>
    </div>
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999" data-v-inspector="pages/index.vue:50:9">
      <div class="h-[100%] flex items-center justify-center" data-v-inspector="pages/index.vue:51:13">
        <div class="relative inline-block" data-v-inspector="pages/index.vue:52:17">
          <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0" data-v-inspector="pages/index.vue:53:21"></iframe>
          <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl" @click="toggle" data-v-inspector="pages/index.vue:55:21"></a>
        </div>
      </div>
    </div>
    <About data-v-inspector="pages/index.vue:59:9" />
    <Features data-v-inspector="pages/index.vue:60:9" />
    <AgencyTab data-v-inspector="pages/index.vue:61:9" />
    <Cta data-v-inspector="pages/index.vue:62:9" />
    <Client data-v-inspector="pages/index.vue:63:9" />
    <Pricing data-v-inspector="pages/index.vue:64:9" />
    <Blogs data-v-inspector="pages/index.vue:65:9" />
    <GetInTouch data-v-inspector="pages/index.vue:66:9" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import image1 from '../assets/images/bg/1.jpg'
import NavLight from '@/components/NavLight.vue'
import About from '@/components/About.vue'
import Features from '@/components/Features.vue'
import AgencyTab from '@/components/AgencyTab.vue'
import Cta from '@/components/Cta.vue'
import Client from '@/components/Client.vue'
import Pricing from '@/components/Pricing.vue'
import Blogs from '@/components/Blogs.vue'
import GetInTouch from '@/components/GetInTouch.vue'

// Estado reactivo
const isActive = ref(false)
const images = ref([
  {
    id: 1,
    src: image1,
  },
])

// Método para alternar el estado del lightbox
function toggle() {
  isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
/* Agrega aquí tus estilos personalizados */
</style>-->

<!--
<template>
    <div>
        <NavLight />  
    
        <section class="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
            <div class="absolute inset-0 overflow-hidden">
                <div v-for="image in images" :key="image.id" class="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover"
                  > <img :src="image.src" alt=""></div>
            </div>
            <div class="absolute inset-0 bg-black/70"></div>

            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <div class="text-center">
                        <a href="#!" @click="toggle"
                            class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </a>
                    </div>

                    <h4
                        class="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">
                        We Collaboration Easy & Fast</h4>

                    <p class="text-white/70 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and
                        awesome template, you can replace it with any text.</p>

                    <div class="relative mt-8">
                        <a href=""
                            class="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Get
                            Started</a>
                    </div>
                </div>
            </div>&lt;!&ndash;end container&ndash;&gt;
        </section>&lt;!&ndash;end section&ndash;&gt;
        <div class="relative">
            <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <a href="#about"><i
                        class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
            </div>

            <div
                class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <div class="relative inline-block">
                    <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500"
                        frameborder="0"></iframe>
                    <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl" @click="toggle"></a>
                </div>
            </div>
        </div>
        <About />
        <Features />
        <AgencyTab />
        <Cta />
        <Client />
        <Pricing />
        <Blogs />
        <GetInTouch />
    </div>
</template>

<script setup lang="ts">
import image1 from '../assets/images/bg/1.jpg'
import NavLight from '@/components/NavLight.vue'
import About from '@/components/About.vue'
import Features from '@/components/Features.vue'
import AgencyTab from '@/components/AgencyTab.vue'
import Cta from '@/components/Cta.vue'
import Client from '@/components/Client.vue'
import Pricing from '@/components/Pricing'
import Blogs from '@/components/Blogs.vue'
import GetInTouch from '@/components/GetInTouch.vue'









export default {
    name: "IndexPage",
    data() {
        return {
            isActive: false,
            images: [
                {
                    id: 1,
                    src: image1,

                },
            ]
        }
    },
    components: {
        NavLight,
        About,

        Features,
        AgencyTab,
        Cta,
        Client,
        Pricing,
        Blogs,
        GetInTouch








    },
    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false;
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>-->
