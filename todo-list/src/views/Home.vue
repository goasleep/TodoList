<template>
  <div class="home">
    <!-- <to-do-list></to-do-list> -->
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";
export default {
  name: "home",
  components: {
    ToDoList
  },
  methods: {}
};
</script>

<style>
</style>
