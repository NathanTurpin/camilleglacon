import { defineStore } from 'pinia'
import { reactive } from 'vue'
import apiClient from '@/API/Axios.api'

export const usePagesStore = defineStore('pages', () => {
  const state = reactive({})

  async function getDb() {
    try {
      const response = await apiClient.get('/db')
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des actions :', error)
      throw error
    }
  }

  async function getPageById(id) {
    try {
      const response = await apiClient.get('/page/' + id)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des actions :', error)
      throw error
    }
  }
  return {
    state,
    getDb,
    getPageById
  }
})
