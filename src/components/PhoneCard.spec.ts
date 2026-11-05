import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import PhoneCard from './PhoneCard.vue'
import type { Phone } from '@/types'

const phone: Phone = {
  id: 'nova-x1',
  brand: 'Nova',
  model: 'X1',
  price: 69900,
  imageUrl: '',
  description: '',
  storageGb: 128,
  ramGb: 8,
  screenInches: 6.1,
  color: 'Black',
  stock: 12,
}

function mountCard() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/phones/:id', name: 'phone-detail', component: { render: () => null } }],
  })
  return mount(PhoneCard, { props: { phone }, global: { plugins: [router] } })
}

describe('PhoneCard', () => {
  it('shows brand, model, price and an image placeholder', () => {
    const wrapper = mountCard()

    expect(wrapper.text()).toContain('Nova')
    expect(wrapper.find('h2').text()).toBe('X1')
    expect(wrapper.text()).toContain('€699.00')
    expect(wrapper.find('[data-test="image-placeholder"]').exists()).toBe(true)
  })

  it('links to the phone detail page', () => {
    const wrapper = mountCard()

    expect(wrapper.find('a').attributes('href')).toBe('/phones/nova-x1')
  })
})
