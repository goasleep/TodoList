<template>
  <div id="welcome">
    <a-row type= "flex" justify="center" align="middle">
        <a-col :span="6" :offset="3">
            <a-input placeholder="please input your name " style="width:40%" v-model="name" />
            <a-button type="primary" @click="handleUse">登录</a-button>
        </a-col>
    </a-row>
    <!-- <input v-model="name" /> -->
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleUse() {
      this.$store.commit("setName", this.name);
      this.$router.push("/home/todolist");
    }
  }
};
</script>


<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>