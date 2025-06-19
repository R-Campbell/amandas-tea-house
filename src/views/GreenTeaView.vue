<template>
  <div>
    <HeroSection
      title="Quali-TEA Greens"
      description="Delicate, fresh teas with antioxidants and subtle flavors, perfect for mindful moments"
      category="green"
      class="green-tea-hero"
    />

    <TeaSection
      :filter-function="filterGreenTeas"
      chip-color="success"
      style-chip-color="green lighten-4"
      style-chip-text-color="green darken-2"
      name-color="#228B22"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterGreenTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'green')
}
</script>

<style scoped>

</style>
