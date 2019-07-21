<template>
  <div id="listItem">
    <p>
      <input type="checkbox" class="checkbox" v-on="handleCheck"/>
      <span :class="check">{{message}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "list_item",
  props: {
    message: {
      type: String,
    }
  },
  data() {
      return {
          check: "none",
      }
  },
  methods: {
      handleCheck() {
          this.check === "check" ? this.check = "none" : this.check = "check";
      }
  },
};
</script>

<style lang="scss" scoped>
</style>