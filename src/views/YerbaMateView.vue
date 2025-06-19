<template>
  <div>
    <HeroSection
      title="Energizing Yerba Mate"
      description="Energizing South American beverage with natural caffeine and health benefits"
      category="yerbamate"
      class="yerba-mate-hero"
    />

    <TeaSection
      :filter-function="filterYerbMateTeas"
      chip-color="teal"
      style-chip-color="teal lighten-4"
      style-chip-text-color="teal darken-2"
      name-color="#008080"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterYerbMateTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'yerba mate')
}
</script>

<style scoped>

</style>
