import { supabase } from '@/lib/supabase';
import { ref } from 'vue';

const allWorks = ref([]);
async function fetchWorks () {
  try {
    const { data: works, error } = await supabase.from('works')
      .select(`
        id,
        todos (id, todo)
      `)
      .eq('done', false)
      .order('id')
    if (error) {
      console.log('error', error)
      return
    }
    // handle for when no works are returned
    if (works === null) {
      allWorks.value = []
      return
    }
    // store response to allTodos
    allWorks.value = works
    console.log('got works!', allWorks.value)
  } catch (err) {
    console.error('Error retrieving data from db', err)
  }
}

async function createWork(todoId: number) {
  try {
    const { data, error } = await supabase
      .from('works')
      .insert([
        { 'todo_id': todoId },
      ])
      .select()
    if (error) {
      console.log('error', error)
      return
    }
    return data;
  } catch (error) {
    console.log('Error create work', error);
  }
}

async function finishWork(todoId: number) {
  try {
    const { data, error } = await supabase
      .from('works')
      .update({ done: true })
      .eq('id', todoId)
      .select();
    if (error) {
      console.log(error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Error to finished', e);
  }
}

async function deleteWork(todoId: number) {
  try {
    const { error } = await supabase
      .from('works')
      .delete()
      .eq('id', todoId);
    if (error) {
      console.log('error', error)
      return false;
    }
    return true;
  } catch (error) {
    console.log('Error delete work', error);
    return false;
  }
}

export {
  allWorks,
  fetchWorks,
  createWork,
  deleteWork,
  finishWork
}
