<template>
  <div>
    <HeroSection
      title="Let's Get Oolong"
      description="Semi-oxidized teas with complex flavors between green and black, perfect for contemplation"
      category="oolong"
      image="oolong-hero.webp"
      class="oolong-hero"
    />

    <TeaSection
      :filter-function="filterOolongTeas"
      chip-color="warning"
      style-chip-color="amber lighten-4"
      style-chip-text-color="amber darken-2"
      name-color="#DAA520"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterOolongTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'oolong')
}
</script>

<style scoped>

</style>
