<template>
  <div id="welcome">
      <button @click="handleUse">开始使用</button>
  </div>
</template>

<script>
export default {
  name:'welcome',
  data() {
    return {
      name: "",
    }
  },
  methods: {
    handleUse(){
        this.$router.push("/home")
    }
  },
}
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