<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="border-b border-gray-200 bg-white">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <RouterLink to="/" class="text-lg font-semibold">Phone Shop</RouterLink>
        <nav class="flex gap-6 text-sm">
          <RouterLink to="/phones" class="hover:text-blue-600">Phones</RouterLink>
          <RouterLink to="/cart" class="hover:text-blue-600">Cart</RouterLink>
        </nav>
      </div>
    </header>
    <main class="mx-auto max-w-6xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
