<template>
  <div id="app">
    <div class="body">
      <el-backtop />
      <Nav class="nav"></Nav>
      <div class="block" />
      <router-view />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/main/Nav";
import Home from "@/components/main/Home";
import Footer from "@/components/main/Footer";

export default {
  name: "App",
  data() {
    return {
      documents: []
    };
  },

  components: {
    Nav,
    Footer,
    Home
  }
};
</script>

<style lang="scss">
* {
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none; */

  /* max-width: 1680px; */
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  /* color: #2c3e50; */
  color: black;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* position: absolute; */
  /* max-width: 1680px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* left: 50%; 
  transform: translate(0%, 0); */
  .body {
    max-width: 1680px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    .nav {
      position: fixed;
      z-index: 20;
      width: 100%;
      max-width: 1680px;
    }
    .block {
      height: 110px;
    }
  }
}
</style>
