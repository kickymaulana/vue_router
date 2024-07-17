<script setup>
</script>

<template>
  <h1>Halo dunia</h1>
  <p>
  <strong>router path sekarang adalah : </strong> {{ $route.fullpath }}
  </p>
  <nav>
    <RouterLink to="/">Beranda</RouterLink>
    <RouterLink to="/tentang">Tentang</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
