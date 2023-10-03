<script setup>
const props = defineProps({
  pageData: Object
})
</script>

<template>
  <div class="rea-details" v-if="props.pageData">
    <div class="rea-details__image">
      <img
        :src="props.pageData.Thumbnail.files[0].file.url"
        alt=""
        v-if="props.pageData.Thumbnail.files[0]"
      />
    </div>
    <div class="rea-details__content">
      <div class="rea-details__description">
        <h3>Description</h3>
        <p v-if="props.pageData.Description.rich_text[0]">
          {{ props.pageData.Description.rich_text[0].text.content }}
        </p>
        <hr />
      </div>
      <div class="rea-details__section">
        <h3>Outils</h3>
        <p v-if="props.pageData.Outils.rich_text[0]" class="mention">
          {{ props.pageData.Outils.rich_text[0].text.content }}
        </p>
      </div>
      <hr />
      <div class="rea-details__section">
        <h3>Lien</h3>
        <p v-if="props.pageData.Behance.url">
          <a :href="props.pageData.Behance.url" target="_blank">Behance</a>
        </p>
      </div>
      <hr />

      <div class="rea-details__section">
        <h3>Disponnible</h3>
        <p v-if="props.pageData.Behance.url">
          <a :href="props.pageData.Behance.url" target="_blank">Lien</a>
        </p>
      </div>
      <hr />

      <div class="rea-details__retour">
        <h2 class="rea-details__subtitle">Retour sur le projet</h2>
        <p v-if="props.pageData.Retour.rich_text[0]">
          {{ props.pageData.Retour.rich_text[0].text.content }}
        </p>
        <i v-if="props.pageData.Interlocuteur.rich_text[0]" class="mention">
          {{ props.pageData.Interlocuteur.rich_text[0].text.content }}
        </i>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.rea-details {
  display: flex;
  padding: 2rem 0;
  &__image {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 60%;
  }
  &__description {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
  }
  &__section {
    display: flex;
    justify-content: space-between;
  }
  &__retour {
    border-radius: 5px;
    background: rgba(55, 125, 53, 0.22);
    display: flex;
    padding: 24px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>