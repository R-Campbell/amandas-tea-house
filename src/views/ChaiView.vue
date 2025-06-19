<template>
  <div>
    <HeroSection
      title="Teas to CHAI for"
      description="Spiced black tea blends from the Indian subcontinent, perfect for warming the soul"
      category="chai"
      class="chai-hero"
    />

    <TeaSection
      :filter-function="filterChaiTeas"
      chip-color="deep-orange"
      style-chip-color="orange lighten-4"
      style-chip-text-color="orange darken-2"
      name-color="#FF4500"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterChaiTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'chai')
}
</script>

<style scoped>

</style>
