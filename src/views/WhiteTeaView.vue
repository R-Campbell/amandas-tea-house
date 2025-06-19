<template>
  <div>
    <HeroSection
      title="Pure White Teas"
      description="Delicate and subtle teas with the least processing, offering pure and natural flavors"
      category="white"
      class="white-tea-hero"
    />

    <TeaSection
      :filter-function="filterWhiteTeas"
      chip-color="info"
      style-chip-color="blue lighten-4"
      style-chip-text-color="blue darken-2"
      name-color="#4682B4"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterWhiteTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'white')
}
</script>

<style scoped>

</style>
