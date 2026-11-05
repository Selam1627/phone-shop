import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import CatalogView from './CatalogView.vue'
import phonesFixture from '@/mocks/phones.json'

async function mountView() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/phones', name: 'catalog', component: CatalogView },
      { path: '/phones/:id', name: 'phone-detail', component: { render: () => null } },
    ],
  })
  router.push('/phones')
  await router.isReady()

  const wrapper = mount(CatalogView, { global: { plugins: [createPinia(), router] } })
  await flushPromises()
  return { router, wrapper }
}

describe('CatalogView', () => {
  it('shows a card for every phone in the mock data', async () => {
    const { wrapper } = await mountView()

    const hrefs = wrapper.findAll('li a').map((link) => link.attributes('href'))
    expect(hrefs).toEqual(phonesFixture.map((phone) => `/phones/${phone.id}`))
  })

  it('navigates to the detail page when a card is clicked', async () => {
    const { router, wrapper } = await mountView()

    await wrapper.find('li a').trigger('click')
    await flushPromises()

    expect(router.currentRoute.value.fullPath).toBe(`/phones/${phonesFixture[0]!.id}`)
  })
})
