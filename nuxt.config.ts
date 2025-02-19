// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    runtimeConfig: {
        // Variables que solo se usan en el servidor
        apiSecret: process.env.API_SECRET,
        // Variables accesibles desde el cliente
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:1337'
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        https: true
    },
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    image: {
        domains: ['pemex.com'],
        screens: {
            xs: 320,
            sm: 640,
            md: 1024,
            lg: 1280
        }
    },
    nitro: {
        storage: {
            redis: {
                driver: 'redis',
                host: 'localhost', // Si tu servidor Redis está en otro lugar, cámbialo
                port: 6379,
                password: '', // Si usas autenticación, coloca la contraseña aquí
            }
        }
    }
})