<template>
    <div>
    <a-row>
      <a-col>
        <a-card :body-style="{ padding: '0px' }">
          <a-avatar :size="80" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div style="padding: 20px;">
            <span>{{ getUsername }}</span>
            <div class="bottom clearfix">
              <a-button type="text" class="button">操作按钮</a-button>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  computed: {
    getUsername() {
      return this.$store.state.name;
    }
  }
};
</script>
