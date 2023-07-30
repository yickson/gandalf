<template>
  <div class="fixed bottom-0 w-full bg-blue-600 text-white text-center p-4">
    <div class="flex justify-center">
      <p class="mr-2">Web hecha con amor por la familia de Gandalf</p>
      <img :src="heart" alt="heart">
    </div>
    <p class="font-bold">
      Lista de actividades para colaborar con la mamá de Gandalf
    </p>
  </div>
</template>
<script setup lang="ts">
import heart from '../assets/img/corazon.png'
</script>
<style scoped>

</style>
