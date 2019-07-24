<template>
  <div>
    <p v-if="!editing">
      <a-checkbox
        @change="changeStatus(item)"
        v-model="item.isChecked"
        @dblclick="changeEditing(item)"
      >{{item.name}}</a-checkbox>
      <a-button id="delete" @click="deleteItem(item)">x</a-button>
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
        item.name = this.input;
        this.$store.dispatch("update", item);
      }
      this.editing = !this.editing;
    },
    deleteItem(item) {
      this.$store.dispatch("deleteItem", item);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>