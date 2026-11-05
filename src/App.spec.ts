import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import router from './router'

describe('App', () => {
  it('renders the navigation and the current route', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, { global: { plugins: [router] } })

    const links = wrapper.findAll('nav a').map((link) => link.attributes('href'))
    expect(links).toEqual(['/phones', '/cart'])
    expect(wrapper.find('h1').text()).toBe('Home')
  })
})
