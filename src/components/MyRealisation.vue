<script setup>
import ReaComp from '@/components/ReaComp.vue'
import { computed, onMounted, ref } from 'vue'
import { usePagesStore } from '@/stores/pages.js'

let pagesStore = usePagesStore()
let dbData = ref()
let pageData = ref()

// Fonction pour récupérer les données de la table (db) Notion
const fetchdbData = async () => {
  try {
    pagesStore.getDb().then((response) => {
      dbData.value = response

      if (dbData.value.results.length > 0) {
        pageData.value = dbData.value.results[0].properties
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération de la page Notion :', error)
  }
}

// Computed property pour filtrer les données
const filteredData = computed(() => {
  if (dbData.value) {
    return dbData.value.results.slice(0, 4)
  } else {
    return []
  }
})

const test = (data) => {
  pageData.value = data.properties
}

onMounted(() => {
  fetchdbData()
})
</script>

<template>
  <section class="realisations">
    <h1 class="realisations__title">Mes réalisations</h1>

    <div class="realisations__content">
      <div
        v-for="(data, index) in filteredData"
        :key="index"
        class="realisations__item"
        @click="test(data)"
      >
        <h2 class="realisations__subtitle">
          {{ data.properties.Name.rich_text[0].text.content }}
        </h2>
        <h4 class="realisations__year">
          {{ data.properties.Date.date.start.slice(0, 4) }}
        </h4>
        <div class="realisations__tag">
          <p v-for="(tag, tagIndex) in data.properties.Tags.multi_select" :key="tag.id">
            {{ tag.name }}
            {{ tagIndex < data.properties.Tags.multi_select.length - 1 ? ' - ' : '' }}
          </p>
        </div>
      </div>
    </div>

    <ReaComp :pageData="pageData" />
  </section>
</template>


<style lang="scss" scoped>
.realisations {
  height: 100vh;
  width: 100%;
  background-color: var(--surface-secondary);
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__item {
    width: calc(25% - 1rem);
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 3rem;
  }
  &__year {
    margin-bottom: 2rem;
    font-weight: 300;
  }
  &__tag {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
  }
}
</style>