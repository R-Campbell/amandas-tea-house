<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section">
      <v-row
        :style="{ maxWidth: maxWidth, marginLeft: 'auto', marginRight: 'auto' }"
        justify="start"
        align="center"
        class="hero-content">
        <v-col cols="12" md="8" class="text-left">
          <h1 class="text-h3 text-white mb-4">Explore the Possibili'teas</h1>
          <p class="text-h5 text-white">Be You, Tea Full</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Tea Categories Section -->
    <v-sheet
      class="categories-section"
      rounded="xl"
    >
      <v-container
        :style="{ maxWidth: maxWidth, marginLeft: 'auto', marginRight: 'auto' }"
      >
        <v-row>
          <v-col cols="12">
            <h2 class="text-h3 text-center primary--text mb-4">Explore our varie-teas!</h2>
            <p class="text-h6 text-center primary--text mb-4">If you can't decide, try one of Amanda's Bes-TEAs.</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="category in teaCategories"
            :key="category.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card
              :to="category.route"
              elevated
              height="100%"
              hover
              rounded="xl"
              class="category-card"
            >
              <v-img
                v-if="category.image"
                :src="getCategoryImagePath(category)"
                contain
              ></v-img>
              <v-card-text class="text-center pa-6">
                <h3 class="text-h5 primary--text mb-3">{{ category.title }}</h3>
                <p class="text-body-1">{{ category.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import Papa from 'papaparse'

interface TeaCategory {
  title: string
  description: string
  route: string
  image?: string
}

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

const teaCategories = ref<TeaCategory[]>([])

const getCategoryImagePath = (category: TeaCategory): string => {
  if (!category.image) return ''
  return new URL(`../assets/images/teas${category.route}/${category.image}`, import.meta.url).href
}

const loadCategoriesFromCSV = async () => {
  try {
    const response = await fetch('/amandas-tea-shop/categoryData.csv')
    const csvText = await response.text()

    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: 'greedy', // Skip all empty lines including trailing ones
      complete: (results) => {
        teaCategories.value = results.data
          .map((row: any) => ({
            title: row.title?.trim() || '',
            description: row.description?.trim() || '',
            route: row.route?.trim() || '',
            image: row.image?.trim() || ''
          }))
          .filter(category => category.title && category.title.length > 0) // Remove empty entries
      }
    })
  } catch (error) {
    console.error('Error loading category data:', error)
  }
}

onMounted(() => {
  loadCategoriesFromCSV()
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(195deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)), url('@/assets/images/teas/home/home-hero.jpg') center/cover;
  min-height: 400px;
  display: flex;
  align-items: left;
}

.hero-content {
  min-height: 400px;
}

.categories-section {
  padding: 64px 0;
  background-color: #f8f9fa;
  margin: 0 24px;
  margin-top: -64px;
  margin-bottom: 32px;
}

.category-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
}

.primary--text {
  color: #344767;
}
</style>
