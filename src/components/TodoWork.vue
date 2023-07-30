<template>
  <div class="flex justify-between bg-blue-600 text-white text-xl rounded p-2 m-2">
    <p class="flex text-base justify-center items-center">
      {{ content }}
    </p>
    <div class="flex gap-x-2">
      <button @click="$emit('finishWork')" class="bg-black rounded text-base text-white p-1 px-2">Hecho</button>
      <button @click="$emit('deleteWork')" class="bg-red-600 rounded text-base text-white p-1 px-2">Eliminar</button>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  content: String
})

const done = async () => {

}
</script>
<style scoped>

</style>
