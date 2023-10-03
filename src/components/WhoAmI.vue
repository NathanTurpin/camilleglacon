<script setup>
import { ref } from 'vue'

let isExpanded = ref(false)
const objCollapse = [
  {
    title: 'Un métier que j’aime',
    shortText: 'Enchantée, je suis Camille, lilloise et UX/UI Designer par passion !',
    LongText:
      'Enchantée, je suis Camille, lilloise et UX/UI Designer par passion ! J’aime les plantes, c’est inéluctable. Depuis plusieurs années, je crée ma collection de plantes (aromate, plante verte, palmier...) aujourd’hui je travaille entouré d’une cinquantaine de plantes. Ça m’apaise. C’est pourquoi, j’apporte une attention toute particulière aux projets liés de près ou de loin à l’environnement et à l’impact de l’homme sur celui-ci. Cela me tiens à coeur, de pouvoir changer les choses à mon échelle. Pour chaque projet, je reverse à une association un montant pour financer un projet.'
  },
  {
    title: 'Être une femme, c’est ma force',
    shortText:
      'J’ai toujours était un garçon manqué. Petite, je préféré joué avec des camions qu’avec des',
    LongText:
      'J’ai toujours était un garçon manqué. Petite, je préféré joué avec des camions qu’avec des poupées, j’ai grandi en faisant du foot à la récré, j’aimais faire du sport et je ne mettais que des sweats de garçons. (petite pensée à ma maman qui devais m’emmener dans les rayons homme lorsque je souhaitais m’acheter de nouveaux vêtements.) Evidemment, au lycée j’ai suivi une filière technologique, nous n’étions que 2 filles, et cela ne s’est pas améliorer avec le temps. En parallèle, j’allais à la salle de sport, à l’époque, il n’y avait que peu de filles en salle, encore une fois je n’étais entouré que d’homme. A mon premier entretien, on m’a demandé si l’ambiance “vestiaire de foot” ne me dérangeais pas, la majorité de l’entreprise était constitué d’homme. Pour moi rien de nouveau, j’étais constamment la seule fille dans un monde d’homme. A mes yeux, c’était normal...or, cela ne devrait pas l’être ! '
  },
  {
    title: 'Travailler de manière éco-responsable, ma valeur ajoutée.',
    shortText: 'J’aime les plantes, c’est inéluctable',
    LongText:
      'J’aime les plantes, c’est inéluctable. Depuis plusieurs années, je crée ma collection de plantes (aromate, plante verte, palmier...) aujourd’hui je travaille entouré d’une cinquantaine de plantes. Ça m’apaise. C’est pourquoi, j’apporte une attention toute particulière aux projets liés de près ou de loin à l’environnement et à l’impact de l’homme sur celui-ci.  Cela me tiens à coeur, de pouvoir changer les choses à mon échelle. Pour chaque projet, je reverse à une association un montant pour financer un projet.'
  }
]
const toggleText = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="who">
    <h1>Qui suis-je ?</h1>
    <div class="who-left">
      <div class="baseline">Je suis une femme soucieuse de ce qui m’entoure</div>
      <h2>Le bénévolat</h2>
      <div>
        <p class="bold">Je réalise la maquette du site internet de l'association Ukuzola</p>
        <div>
          <p class="bold">14h</p>
          <p>équivalent</p>
        </div>
      </div>
      <a href="#">jeveuxaider.gouv</a>
      <p class="large">En savoir plus</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="8"
        viewBox="0 0 125 8"
        fill="none"
      >
        <path
          d="M124.354 4.35354C124.549 4.15828 124.549 3.8417 124.354 3.64644L121.172 0.464456C120.976 0.269193 120.66 0.269193 120.464 0.464456C120.269 0.659718 120.269 0.9763 120.464 1.17156L123.293 3.99999L120.464 6.82842C120.269 7.02368 120.269 7.34026 120.464 7.53552C120.66 7.73079 120.976 7.73079 121.172 7.53552L124.354 4.35354ZM4.37114e-08 4.5L124 4.49999L124 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="who-right">
      <div>
        <transition name="fade" mode="out-in">
          <div v-if="isExpanded" key="expanded">
            <p></p>
          </div>
          <div v-else key="collapsed">
            <p>Enchantée, je suis Camille, lilloise et UX/UI Designer par passion !</p>
          </div>
        </transition>
        <button @click="toggleText">{{ isExpanded ? 'Lire moins' : 'Lire plus' }}</button>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active dans <2.1.8 */ {
  opacity: 0;
}
</style>