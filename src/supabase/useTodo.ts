import { supabase } from '@/lib/supabase';
import { ref } from 'vue';

const allTodos = ref([]);

async function fetchTodos() {
  try {
    const { data: todos, error } = await supabase.from('todos').select('*').order('id')
    if (error) {
      console.log('error', error)
      return
    }
    // handle for when no todos are returned
    if (todos === null) {
      allTodos.value = []
      return
    }
    // store response to allTodos
    allTodos.value = todos
    console.log('got todos!', allTodos.value)
  } catch (err) {
    console.error('Error retrieving data from db', err)
  }
}

export {
  allTodos,
  fetchTodos
}
