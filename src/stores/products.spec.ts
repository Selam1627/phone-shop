import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useProductsStore } from './products'
import { getPhones } from '@/services/productService'
import phonesFixture from '@/mocks/phones.json'

vi.mock('@/services/productService', () => ({ getPhones: vi.fn() }))

describe('products store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.mocked(getPhones).mockReset()
  })

  it('loads phones from the service', async () => {
    vi.mocked(getPhones).mockResolvedValue(phonesFixture)
    const store = useProductsStore()

    const pending = store.fetchPhones()
    expect(store.loading).toBe(true)
    await pending

    expect(store.phones).toEqual(phonesFixture)
    expect(store.loading).toBe(false)
    expect(store.error).toBeNull()
  })

  it('sets an error when the service fails', async () => {
    vi.mocked(getPhones).mockRejectedValue(new Error('network'))
    const store = useProductsStore()

    await store.fetchPhones()

    expect(store.phones).toEqual([])
    expect(store.loading).toBe(false)
    expect(store.error).toBe('Could not load phones. Please try again.')
  })
})
