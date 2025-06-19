<template>
  <div>
    <HeroSection
      title="Pu'erh-TEA On"
      description="Aged and fermented teas from Yunnan province with deep, earthy flavors that improve with time"
      category="puerh"
      class="puerh-hero"
    />

    <TeaSection
      :filter-function="filterPuerhTeas"
      chip-color="brown"
      style-chip-color="brown lighten-4"
      style-chip-text-color="brown darken-2"
      name-color="#8B4513"
    />
  </div>
</template>

<script setup lang="ts">
import { type Tea } from '@/utils/csvParser'
import HeroSection from '@/components/HeroSection.vue'
import TeaSection from '@/components/TeaSection.vue'

const filterPuerhTeas = (teas: Tea[]) => {
  return teas.filter(tea => tea.type.toLowerCase() === 'pu-erh')
}
</script>

<style scoped>

</style>
