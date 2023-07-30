<template>
  <div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
          Selecciona la tarea
        </h3>
        <div class="mt-2">
          <select v-model="selectTodo" class="border border-gray-400 rounded">
            <option v-for="(todo, index) in allTodos" :key="index" :value="todo.id">
              {{ todo.todo }}
            </option>
          </select>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="createTodoInList" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">
          Aceptar
        </button>
        <button @click="$emit('closeModal')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:w-auto sm:text-sm">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { allTodos, fetchTodos } from '@/supabase/useTodo';
import { onMounted, ref } from 'vue';
import { createWork } from '@/supabase/useWorks';


const selectTodo = ref(0);
const initialize = async () => {
  await fetchTodos();
}

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

const createTodoInList = async () => {
  await createWork(selectTodo.value);
  emit('closeModal');
}

onMounted(() => {
  initialize()
})

</script>
<style scoped>

</style>
