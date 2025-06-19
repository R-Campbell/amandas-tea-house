<template>
  <v-container fluid class="hero-section">
    <v-row
      :style="{ maxWidth: maxWidth, marginLeft: 'auto', marginRight: 'auto' }"
      justify="start"
      align="center"
      class="hero-content"
    >
      <v-col cols="12" md="8" class="text-left">
        <h1 class="text-h3 text-white mb-4">{{ title }}</h1>
        <p class="text-h5 text-white">{{ description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

interface Props {
  title: string
  description: string
  image?: string
  category?: string
}

const props = defineProps<Props>()

const backgroundImage = computed(() => {
  if (props.image) {
    const imageUrl = new URL(`../assets/images/teas/${props.category}/${props.image}`, import.meta.url).href
    return `url(${imageUrl})`
  } else if (props.category) {
    try {
      const imageUrl = new URL(`../assets/images/teas/${props.category}/${props.category}-hero.jpg`, import.meta.url).href
      return `url(${imageUrl})`
    } catch {
      return 'none'
    }
  }
  return 'none'
})

const { name } = useDisplay()

const maxWidth = computed(() => {
  switch (name.value) {
    case 'xs': return '540px'
    case 'sm': return '720px'
    case 'md': return '960px'
    case 'lg': return '1140px'
    case 'xl': return '1320px'
    case 'xxl': return '1320px'
    default: return '1320px'
  }
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(195deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)), v-bind(backgroundImage) center/cover;
  min-height: 400px;
  display: flex;
  align-items: left;
}

.hero-content {
  min-height: 400px;
}
</style>
