<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import PhoneCard from '@/components/PhoneCard.vue'

const productsStore = useProductsStore()
const { phones, loading, error } = storeToRefs(productsStore)

onMounted(() => {
  productsStore.fetchPhones()
})
</script>

<template>
  <section>
    <h1 class="mb-6 text-2xl font-semibold">Phones</h1>

    <p v-if="loading" class="text-gray-500">Loading phones…</p>
    <p v-else-if="error" class="text-red-600" role="alert">{{ error }}</p>
    <p v-else-if="phones.length === 0" class="text-gray-500">No phones available.</p>
    <ul v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="phone in phones" :key="phone.id">
        <PhoneCard :phone="phone" />
      </li>
    </ul>
  </section>
</template>
