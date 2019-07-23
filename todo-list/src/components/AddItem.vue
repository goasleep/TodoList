<template>
  <div id="addItem">
    <input id="add_input" type="input-text" v-model="newItem" />
    <button id="add_button" @click="handlerAddItem">Add</button>
  </div>
</template>

<script>
export default {
  name: "addItem",
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    handlerAddItem() {
      this.$store.commit("addNewItem", {name:this.newItem,isChecked:false});
      debugger;
      this.$store.dispatch("add",{name:this.newItem,isChecked:false});
      this.newItem = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>