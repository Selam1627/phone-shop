import type { Phone } from '@/types'
import phonesFixture from '@/mocks/phones.json'

// Typed assignment so the fixture is checked against the Phone model at compile time
const phones: Phone[] = phonesFixture

export async function getPhones(): Promise<Phone[]> {
  // Return copies so callers can't mutate the shared fixture
  return phones.map((phone) => ({ ...phone }))
}
