<script setup></script>
<template>
  <header class="header">
    <h4 class="edit-title">disponible à partir d'octobre</h4>
    <div class="baseline">
      <span class="baseline baseline--bg-primary"> Creative UX.UI designer </span><br />
      engagée dans

      <span class="baseline baseline--bg-secondary">le dev’ durable </span> et le <br />

      <span class="baseline baseline--bg-tertiary"> rôle des femmes</span> dans la tech.
    </div>

    <div>
      <h1 class="header__title">J'ai un projet</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="198" viewBox="0 0 198 8" fill="none">
        <path
          d="M197.854 4.35355C198.049 4.15829 198.049 3.84171 197.854 3.64645L194.672 0.464466C194.476 0.269204 194.16 0.269204 193.964 0.464466C193.769 0.659728 193.769 0.976311 193.964 1.17157L196.793 4L193.964 6.82843C193.769 7.02369 193.769 7.34027 193.964 7.53553C194.16 7.7308 194.476 7.7308 194.672 7.53553L197.854 4.35355ZM0.5 4.5H197.5V3.5H0.5V4.5Z"
          fill="black"
        />
      </svg>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4vw;
  margin: 5vw 0;
  height: 100%;
  &__title {
    font-family: 'RFCeqabro', sans-serif;
    @media (max-width: 768px) {
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
    }
  }
}
.edit-title {
  color: var(--content-secondary);
  text-transform: uppercase;
}

.baseline {
  font-family: 'RFCeqabro', sans-serif;
  line-height: 8.16vw;
  &--bg-primary {
    background-color: var(--primary);
  }
  &--bg-secondary {
    background-color: var(--secondary);
  }
  &--bg-tertiary {
    background-color: var(--tertiary);
  }
  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 125%;
  }
}
</style>
