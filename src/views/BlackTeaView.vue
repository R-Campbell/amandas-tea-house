<template>
  <div>
    <HeroSection
      title="Brew-TEA-ful Blacks"
      description="Full-bodied, robust teas with rich flavors and high caffeine content, perfect for morning energy"
      category="black"
      class="black-hero"
    />

    <TeaSection
      :filter-function="filterBlackTeas"
      chip-color="error"
      style-chip-color="red lighten-4"
      style-chip-text-color="red darken-2"
      name-color="#8B0000"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterBlackTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'black')
}
</script>

<style scoped>

</style>
