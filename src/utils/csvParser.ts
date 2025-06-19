import Papa from 'papaparse'

export interface Tea {
  id?: number
  name: string
  type: string
  style: string
  description: string
  company: string
  image?: string
  besTea?: string
}

export const loadTeaDataFromCSV = async (): Promise<Tea[]> => {
  try {
    const response = await fetch('/amandas-tea-shop/teaData.csv')
    const csvText = await response.text()

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: 'greedy', // Skip all empty lines including trailing ones
        complete: (results) => {
          if (results.errors.length > 0) {
            console.error('CSV parsing errors:', results.errors)
          }

          const teas: Tea[] = results.data
            .map((row: any, index: number) => ({
              id: index + 1,
              name: row.Name?.trim() || '',
              type: row.Type?.trim() || '',
              style: row.Style?.trim() || '',
              description: row.Description?.trim() || '',
              company: row.Company?.trim() || '',
              image: row.Image?.trim() || '',
              besTea: row['Bes-Tea']?.trim() || ''
            }))
            .filter(tea => tea.name && tea.name.length > 0) // Remove empty or invalid entries

          resolve(teas)
        },
        error: (error: Error) => {
          reject(error)
        }
      })
    })
  } catch (error) {
    console.error('Error loading tea data:', error)
    throw error
  }
}

export const getTeasByType = (teas: Tea[], type: string): Tea[] => {
  return teas.filter(tea =>
    tea.type.toLowerCase() === type.toLowerCase()
  )
}

export const getTeaImagePath = (tea: Tea): string => {
  if (!tea.image) return ''
  const typeFolder = tea.type.toLowerCase().replace(/\s+/g, '').replace(/-/g, '')
  return new URL(`../assets/images/teas/${typeFolder}/${tea.image}`, import.meta.url).href
}
