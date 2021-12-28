<template>
  <main class="animate__animated animate__fadeIn">
    <Header />
    <Nuxt />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>
