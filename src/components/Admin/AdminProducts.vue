<template>
  <div>
    <div class="container">
      <h1>商品</h1>
      <ul class="list">
        <li class="product_data" v-for="(item,index) in productList">
          <div class="cover" :style="{backgroundImage:`url('${item.imageURL}')`}"></div>
          <div>{{item.id}}</div>
          <div>{{item.brand}}</div>
          <div>{{item.title}}</div>
          <div>{{`$ `+item.price}}</div>
          <router-link :to="{name:'view-product',params:{product_id: item.id}}">go</router-link>
        </li>
        <router-link to="/new-product">
          <button>[+]</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["productList"])
  },
  methods: {
    ...mapActions(["getFireProducts"])
  },
  created() {
    this.getFireProducts();
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  width: 500px;
  display: flex;
}
.cover {
  width: 100px;
  height: 100px;
  background: center center;
  background-size: cover;
  width: 100%;
  height: 350px;
}
</style>
