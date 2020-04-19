<template>
  <div>
    <div class="title">
      <router-link to="/admin">
        <h1 class="admin">Admin</h1>
      </router-link>
      <h1>
        <router-link to="/admin/members">members</router-link>
      </h1>
      <h1>
        <router-link to="/admin/products">products</router-link>
      </h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin"
};
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.admin {
  font-size: 2em;
}
</style>
