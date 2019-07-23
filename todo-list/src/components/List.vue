<template>
  <div> 
      <ol>
      <li v-for="(item, index) in itemsShow" :key="index" v-bind:class="{checked:item.isChecked}">
          <ListItem :item="item"></ListItem>
        </p>
      </li>
      </ol>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem.vue';
export default {
  name: "List",
  mounted() {
    this.$store.dispatch("flushItems");
  },
    components: {
    ListItem
  },
  computed: {
    itemsShow() {
      return this.$store.getters.getShowList;
    }
  }
};
</script>
<style></style>