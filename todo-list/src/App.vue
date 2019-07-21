<template>
  <div id="app">
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>

<style scoped>
  @import './assets/css/todolist.css';
</style>