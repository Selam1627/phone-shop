import { describe, expect, it } from 'vitest'
import { getPhones } from './productService'
import phonesFixture from '@/mocks/phones.json'

describe('productService', () => {
  it('returns all phones from the mock data', async () => {
    const phones = await getPhones()

    expect(phones).toEqual(phonesFixture)
  })

  it('returns copies so the fixture cannot be mutated', async () => {
    const [first] = await getPhones()
    first!.price = 1

    const [again] = await getPhones()
    expect(again!.price).toBe(phonesFixture[0]!.price)
  })
})
