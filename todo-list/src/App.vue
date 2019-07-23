<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "app",
  components: {
    ToDoList
  }
};
</script>

<style scoped>
@import "./assets/css/todolist.css";
</style>