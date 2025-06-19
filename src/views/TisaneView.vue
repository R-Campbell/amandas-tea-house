<template>
  <div>
    <HeroSection
      title="TEA-licious Tisanes"
      description="Caffeine-free herbal infusions made from flowers, fruits, and herbs for wellness and relaxation"
      category="tisane"
      image="tisane-hero.webp"
      class="tisane-hero"
    />

    <TeaSection
      :filter-function="filterHerbalTeas"
      chip-color="purple"
      style-chip-color="purple lighten-4"
      style-chip-text-color="purple darken-2"
      name-color="#9932CC"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterHerbalTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'tisane')
}
</script>

<style scoped>

</style>
