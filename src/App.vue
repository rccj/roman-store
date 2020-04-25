<template>
  <div id="app">
    <div class="body">
      <el-backtop></el-backtop>
      <Nav class="nav"></Nav>
      <div class="block"></div>
      <router-view />
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/main/nav";
import Home from "@/components/main/Home";
import Footer from "@/components/main/footer";

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

<style>
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
}
.body {
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
.block {
  /* width: 100%; */
  height: 110px;
}
.nav {
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>
