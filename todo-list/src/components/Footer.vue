<template>
  <div id="footer">
    <button id="all" @click="show(all)">All</button>
    <button id="active" @click="show(active)">Active</button>
    <button id="complete" @click="show(completed)">Completed</button>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
      return {
          all : "all",
          active : "active",
          completed : "completed"
      }
  },
  methods: {
    show(status) {
      this.$store.commit("changeState", status);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>