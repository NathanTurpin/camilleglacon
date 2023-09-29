<script setup>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/HeaderComp.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavBar />
    <Header />
  </header>

  <RouterView />
</template>

<style lang="scss"></style>
