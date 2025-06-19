<template>
  <v-sheet
    class="tea-section"
    rounded="xl"
  >
    <v-container
      :style="{ maxWidth: maxWidth, marginLeft: 'auto', marginRight: 'auto' }"
    >
      <v-row>
        <v-col
          v-for="tea in filteredTeas"
          :key="tea.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <TeaCard
            :tea="tea"
            :chip-color="chipColor"
            :style-chip-color="styleChipColor"
            :style-chip-text-color="styleChipTextColor"
            :name-color="nameColor"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useTeaStore } from '@/stores/teaStore'
import { type Tea } from '@/utils/csvParser'
import TeaCard from '@/components/TeaCard.vue'

interface Props {
  filterFunction: (teas: Tea[]) => Tea[]
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

const { name } = useDisplay()
const teaStore = useTeaStore()

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

const filteredTeas = computed(() => {
  return props.filterFunction(teaStore.teas)
})

onMounted(() => {
  teaStore.loadTeas()
})
</script>

<style scoped>
.tea-section {
  padding: 64px 0;
  background-color: #f8f9fa;
  margin: 0 24px;
  margin-top: -64px;
  margin-bottom: 32px;
}
</style>
