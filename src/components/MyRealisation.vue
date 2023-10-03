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
    return dbData.value.results.slice(0, 4).map((data, index) => ({
      ...data,
      isActive: index === 0 // Ajoutez une propriété isActive à chaque élément
    }))
  } else {
    return []
  }
})

const itemSelected = (data) => {
  pageData.value = data.properties
  filteredData.value.forEach((item) => {
    item.isActive = false
  })

  // Activez uniquement l'élément cliqué
  data.isActive = true
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
        @click="itemSelected(data)"
      >
        <h2
          class="realisations__subtitle"
          :class="{ 'realisations__subtitle--active': data.isActive }"
        >
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
        <div
          class="realisations__trait"
          :class="{ 'realisations__trait--active': data.isActive }"
        ></div>
      </div>
    </div>

    <ReaComp :pageData="pageData" />
  </section>
</template>


<style lang="scss" scoped>
.realisations {
  height: 100%;
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
    position: relative;
    width: calc(25% - 1rem);
    cursor: pointer;
    transition: 5s ease;
    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      .realisations__trait {
        width: 100%;
      }
      .realisations__subtitle {
        --p: 100%;
      }
    }
  }
  &__title {
    margin-bottom: 3rem;
  }
  &__subtitle {
    width: fit-content;
    padding: 1%;
    background: linear-gradient(var(--primary) 0 0) calc(100% - var(--p, 0%)) / var(--p, 0%)
      no-repeat;
    transition: 0.4s, background-position 0s;

    &--active {
      background: var(--primary);
    }
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

  &__trait {
    height: 2px; /* Hauteur du trait */
    width: 0; /* Largeur initiale du trait (0%) */
    background-color: var(--content-primary); /* Couleur du trait */
    transition: width 0.3s ease; /* Transition de la largeur avec une durée de 0.3s */
    &--active {
      width: 100%;
    }
  }
}
.realisations__subtitle::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px; /* Hauteur du trait */
  /* Transition de la transformation */
}

.realisations__item:hover .realisations__subtitle::before {
}
</style>