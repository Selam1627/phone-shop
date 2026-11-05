<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Phone } from '@/types'
import PriceTag from './PriceTag.vue'

defineProps<{
  phone: Phone
}>()
</script>

<template>
  <RouterLink
    :to="{ name: 'phone-detail', params: { id: phone.id } }"
    class="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600"
  >
    <div
      class="flex aspect-square items-center justify-center bg-gray-100 text-gray-400"
      data-test="image-placeholder"
    >
      <svg
        class="h-16 w-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    </div>
    <div class="p-4">
      <p class="text-sm text-gray-500">{{ phone.brand }}</p>
      <h2 class="font-medium group-hover:text-blue-600">{{ phone.model }}</h2>
      <PriceTag :cents="phone.price" class="mt-2 block font-semibold" />
    </div>
  </RouterLink>
</template>
