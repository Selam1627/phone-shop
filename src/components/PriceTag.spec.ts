import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PriceTag from './PriceTag.vue'

describe('PriceTag', () => {
  it.each([
    [69900, '€699.00'],
    [19950, '€199.50'],
    [0, '€0.00'],
  ])('formats %i cents as %s', (cents, expected) => {
    const wrapper = mount(PriceTag, { props: { cents } })

    expect(wrapper.text()).toBe(expected)
  })
})
