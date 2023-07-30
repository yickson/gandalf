<template>
  <div>
    <h1 class="text-2xl text-center">Lista de tareas</h1>
    <!-- Listado de las actividades -->
    <div v-show="allWorks.length > 0" class="bg-gray-300 p-2 mx-2 rounded">
      <TodoWork v-for="(work, index) in allWorks" :key="work.id" :content="work.todos.todo"
                @finish-work="doneWork(work.id)"
                @delete-work="eraseWork(work.id)"/>
    </div>
    <div class="flex justify-items-start">
      <button @click="openModal" class="bg-black rounded text-base text-center text-white py-1 px-2 ml-2 mt-4">Crear tarea</button>
    </div>
  </div>
  <ModalTodo @close-modal="closeModal" v-show="modalVisible" />
</template>
<script setup lang="ts">
import TodoWork from '@/components/TodoWork.vue';
import ModalTodo from '@/components/ModalTodo.vue';
import { onMounted, ref } from 'vue';
import { fetchWorks, allWorks, finishWork, deleteWork } from '@/supabase/useWorks';

const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
}

const closeModal = () => {
  modalVisible.value = false;
  fetchWorks()
}


const doneWork = async (workId: number) => {
  await finishWork(workId);
  await fetchWorks();
}

const eraseWork = async (workId: number) => {
  await deleteWork(workId);
  await fetchWorks();
}


onMounted(() => {
  fetchWorks()
})
</script>
<style scoped>

</style>
