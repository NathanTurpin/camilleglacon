import { defineStore } from 'pinia'
import { reactive } from 'vue'
import apiClient from '@/API/Axios.api'

export const usePagesStore = defineStore('pages', () => {
  const state = reactive({})

  async function getPage() {
    try {
      console.log('cc')
      const response = await apiClient.get('/notion-data')
      console.log(response)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des actions :', error)
      throw error
    }
  }

  async function getDb() {
    try {
      console.log('cc')
      const response = await apiClient.get('/db')
      console.log(response)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des actions :', error)
      throw error
    }
  }
  return {
    state,
    getPage,
    getDb
  }
})
