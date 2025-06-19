import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadTeaDataFromCSV, getTeasByType, type Tea } from '@/utils/csvParser'

export const useTeaStore = defineStore('tea', () => {
  const teas = ref<Tea[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const blackTeas = computed(() => getTeasByType(teas.value, 'Black'))
  const greenTeas = computed(() => getTeasByType(teas.value, 'Green'))
  const whiteTeas = computed(() => getTeasByType(teas.value, 'White'))
  const oolongTeas = computed(() => getTeasByType(teas.value, 'Oolong'))
  const puerhTeas = computed(() => getTeasByType(teas.value, 'Pu-Erh'))
  const herbalTeas = computed(() => getTeasByType(teas.value, 'Herbal'))
  const yerbaMate = computed(() => getTeasByType(teas.value, 'Yerba Mate'))
  
  const chaiTeas = computed(() => 
    teas.value.filter(tea => 
      tea.name.toLowerCase().includes('chai') || 
      tea.description.toLowerCase().includes('chai')
    )
  )

  const loadTeas = async () => {
    if (teas.value.length > 0) return // Already loaded
    
    loading.value = true
    error.value = null
    
    try {
      teas.value = await loadTeaDataFromCSV()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load tea data'
      console.error('Error loading teas:', err)
    } finally {
      loading.value = false
    }
  }

  const getTeasByCategory = (category: string): Tea[] => {
    switch (category.toLowerCase()) {
      case 'black':
        return blackTeas.value
      case 'green':
        return greenTeas.value
      case 'white':
        return whiteTeas.value
      case 'oolong':
        return oolongTeas.value
      case 'pu-erh':
      case 'puerh':
        return puerhTeas.value
      case 'herbal':
      case 'tisane':
        return herbalTeas.value
      case 'yerba mate':
        return yerbaMate.value
      case 'chai':
        return chaiTeas.value
      default:
        return []
    }
  }

  return {
    teas,
    loading,
    error,
    blackTeas,
    greenTeas,
    whiteTeas,
    oolongTeas,
    puerhTeas,
    herbalTeas,
    yerbaMate,
    chaiTeas,
    loadTeas,
    getTeasByCategory
  }
})