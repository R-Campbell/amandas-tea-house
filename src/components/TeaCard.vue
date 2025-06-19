<template>
  <v-card height="100%" class="tea-card" rounded="xl">
    <v-img
      v-if="tea.image"
      :src="getTeaImagePath(tea)"
      cover
      class="tea-image"
    ></v-img>
    <v-card-text class="text-center">
      <h3 class="text-h5 tea-name mb-2">{{ tea.name }}</h3>
      <v-chip
        :color="chipColor"
        text-color="white"
        small
        class="mb-3"
      >
        {{ tea.company }}
      </v-chip>
      <p class="text-body-1 mb-4">{{ tea.description }}</p>
      <div class="d-flex justify-center">
        <v-chip
          :color="styleChipColor"
          :text-color="styleChipTextColor"
          small
        >
          {{ tea.style }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTeaImagePath, type Tea } from '@/utils/csvParser'

interface Props {
  tea: Tea
  chipColor?: string
  styleChipColor?: string
  styleChipTextColor?: string
  nameColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  chipColor: 'secondary',
  styleChipColor: 'grey lighten-4',
  styleChipTextColor: 'grey darken-2',
  nameColor: '#344767'
})
</script>

<style scoped>
.tea-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tea-card:hover {
  transform: translateY(-2px);
}

.tea-image {
  object-fit: cover;
}

.tea-name {
  color: v-bind(nameColor) !important;
}
</style>