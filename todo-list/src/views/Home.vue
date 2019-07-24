<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="backHome">back</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding:50px">
      <a-layout style="background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            style="height: 100%"
          >
            <span slot="title">
              <a-icon type="user" />back
            </span>
            <a-menu-item key="1" @click="jumpList">list</a-menu-item>
            <a-menu-item key="2" @click="jumpMe">me</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
    name: 'home',
    methods:{
        jumpList(){
            this.$router.push('/home/todolist');
        },
        jumpMe(){
            this.$router.push('/home/me');
        },
        backHome(){
            this.$router.push('/');
        }
    }
}
</script>


<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style