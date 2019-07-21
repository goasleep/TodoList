<template>
  <div id="listItem">
    <p>
      <input type="checkbox" class="checkbox" />
      {{message}}
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
  }
};
</script>

<style lang="scss" scoped>
</style>