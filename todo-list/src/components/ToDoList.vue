<template>
  <div id="app" class="container">
    <Header></Header>
    <AddItem></AddItem>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AddItem from "@/components/AddItem.vue";
export default {
  name: "app",
  components: {
    List,
    Header,
    Footer,
    AddItem
  }
};
</script>

<style>
</style>
