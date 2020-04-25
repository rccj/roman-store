<template>
  <div class="container">
    <el-container style=" max-width: 1000px">
      <el-header>
        <router-link :to="{name: 'admin'}">
          <h1 class="admin">Admin</h1>
        </router-link>
      </el-header>
      <el-main>
        <el-menu class="el-menu-demo" mode="horizontal">
          <router-link :to="{name: 'members'}">
            <el-menu-item index="1">Members</el-menu-item>
          </router-link>
          <router-link :to="{name: 'products'}">
            <el-menu-item index="2">Products</el-menu-item>
          </router-link>
        </el-menu>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 900px;
  width:100%;
}
.admin {
  font-size: 2em;
}
</style>
