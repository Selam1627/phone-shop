<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  /** Amount in euro cents */
  cents: number
}>()

const formatter = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' })

const formatted = computed(() => formatter.format(props.cents / 100))
</script>

<template>
  <span>{{ formatted }}</span>
</template>
