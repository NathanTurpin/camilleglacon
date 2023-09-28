<template>
  <main>
    <p class="">cccccccc</p>
    <p class="large">cccccccc</p>
    <p class="bold">cccccccc</p>
    <p class="mention">cccccccc</p>

    <h1>cccccccc</h1>
    <h2>cccccccc</h2>
    <h3>cccccccc</h3>
    <h4>cccccccc</h4>
    <p class="baseline">cccccccc</p>

    <div v-if="pageData">
      {{ pageData.results[0].properties.Name.rich_text[0].text.content }}
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { usePagesStore } from '@/stores/pages.js'

let pageStore = usePagesStore()
let pageData = ref()

// Fonction pour récupérer les données de la page Notion
const fetchPageData = async () => {
  try {
    pageStore.getDb().then((response) => {
      pageData.value = response
    })
  } catch (error) {
    console.error('Erreur lors de la récupération de la page Notion :', error)
  }
}

// Appelez la fonction pour récupérer les données lorsque le composant est monté
onMounted(() => {
  fetchPageData()
})
</script>

<style lang="scss">
.baseline {
  font-family: 'RFCeqabro', sans-serif;
}
</style>