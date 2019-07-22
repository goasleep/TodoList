<template>
  <div id="app" class="container">
    <Header></Header>
    <AddItem></AddItem>
    <todolist></todolist>
    <Footer></Footer>
  </div>
</template>

<script>
import todolist from "@/components/List.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AddItem from "@/components/AddItem.vue";
export default {
  name: "app",
  components: {
    todolist,
    Header,
    Footer,
    AddItem
  }
};
</script>

<style>
</style>
