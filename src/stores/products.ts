import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Phone } from '@/types'
import { getPhones } from '@/services/productService'

export const useProductsStore = defineStore('products', () => {
  const phones = ref<Phone[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchPhones() {
    loading.value = true
    error.value = null
    try {
      phones.value = await getPhones()
    } catch {
      error.value = 'Could not load phones. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return { phones, loading, error, fetchPhones }
})
