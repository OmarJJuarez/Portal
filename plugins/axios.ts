import axios from 'axios'

export default defineNuxtPlugin(() => {
    const apiClient = axios.create({
        baseURL: 'https://api.publicapis.org/entries',
        headers: { 'Content-Type': 'application/json' }
    })
    return { provide: { axios: apiClient } }
})
