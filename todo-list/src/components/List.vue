<template>
  <a-list class="demo-loadmore-list" :loading="loading" itemLayout="horizontal" :dataSource="itemsShow">

    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">loading more</a-button>
    </div>

    <a-list-item slot="renderItem" slot-scope="item">
      <!-- <a slot="actions">edit</a>
      <a slot="actions">more</a>
      <a-list-item-meta
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="https://vue.ant.design/">{{item.name.last}}</a> -->
        <ListItem :item="item"></ListItem>

    </a-list-item>
  </a-list>
</template>
<script>
import reqwest from "reqwest";
import ListItem from "@/components/ListItem"
const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
    };
  },
  computed: {
    itemsShow() {
      return this.$store.getters.getShowList;
    }
  },
  mounted() {
    this.getData(res => {
      this.loading = false;
      this.data = res.results;
    });
    this.$store.dispatch("flushItems");
  },
  components: {
      ListItem,
  },
  methods: {
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: "json",
        method: "get",
        contentType: "application/json",
        success: res => {
          callback(res);
        }
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    }
  }
};
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>