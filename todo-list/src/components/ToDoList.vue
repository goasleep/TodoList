<template>
  <div id="app" class="container">
    <Header></Header>
    <AddItem @submitNewItem="addListItem"></AddItem>
    <todolist :items="itemsShow"></todolist>
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
    AddItem,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addListItem(newItem) {
      // this.items.push({ content: newItem, isChecked: false });
      this.$store.commit("addNewItem",{ content: newItem, isChecked: false})
    }
  },
  computed: {
    // itemsShow: function() {
    //   if (this.$store.state.status === 0) {
    //     return this.$store.state.allItem.filter(item => item.isChecked == false);
    //   } else if (this.$store.state.status === -1) {
    //     return this.$store.state.allItem.filter(item => item.isChecked == true);
    //   } else {
    //     return this.$store.state.allItem;
    //   }
    // }
    itemsShow(){
      return this.$store.getters.getShowList
    }
  }
};
</script>

<style>
</style>
