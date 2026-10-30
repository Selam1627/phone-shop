<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Phone Shop</RouterLink>
    <nav>
      <RouterLink to="/phones">Phones</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
