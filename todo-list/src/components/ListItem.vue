<template>
  <div>
    <p v-if="!editing">
      <input type="checkbox" v-model="item.isChecked" @change="changeStatus(item)" />
      <span  @dblclick="changeEditing(item)">{{item.name}}</span>
      <button id = "delete" @click="deleteItem(item)">x</button>
    </p>
    <p v-else>
      <input v-model="input" @keyup.enter="changeEditing(item)" />
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
      item: Object
  },
  data() {
    return {
      editing: false,
      input: ""
    };
  },
  methods: {
    changeStatus(item) {
      this.$store.dispatch("update", item);
    },
    changeEditing(item) {
      if (this.input !== "") {
          item.name = this.input
        this.$store.dispatch("update", item);
      }
      this.editing = !this.editing;
    },
    deleteItem(item){
        this.$store.dispatch("deleteItem",item);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>