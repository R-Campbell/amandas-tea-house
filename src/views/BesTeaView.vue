<template>
  <div>
    <HeroSection
      title="Amanda's Bes-TEAs"
      description="Our handpicked selection of the finest teas - personally chosen by Amanda"
      category="besteas"
      class="bes-tea-hero"
    />

    <TeaSection
      :filter-function="filterBesTeaTeas"
      chip-color="secondary"
      style-chip-color="amber lighten-3"
      style-chip-text-color="amber darken-3"
      name-color="#FF8F00"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterBesTeaTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.besTea === 'true')
}
</script>

<style scoped>

</style>
