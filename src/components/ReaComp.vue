<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  pageData: Object
})

onMounted(() => {})
</script>


<template>
  <div class="rea-details" v-if="props.pageData">
    {{ props.pageData.Outils.rich_text[0].text.content }}
    {{ props.pageData.Description.rich_text[0].text.content }}
    {{ props.pageData.Retour.rich_text[0].text.content }}
    {{ props.pageData.Behance.url }}
  </div>
</template>


<style lang="scss" scoped>
</style>