<template>
  <div>
    <div class="container">
      <h1>新增商品</h1>
      <form @submit.prevent="saveProduct" class="list">
        <div class="item">
          <input type="text" v-model="id" required />
          <label>ID#</label>
        </div>
        <div class="item">
          <input type="date" v-model="date" required />
          <label>date</label>
        </div>
        <div class="item">
          <!-- <input type="text" v-model="amount" required /> -->
          <el-input-number size="mini" :min="0" :max="999" v-model="amount" required></el-input-number>
          <label>amount</label>
        </div>
        <div class="item">
          <input type="text" v-model="title" required />
          <label>title</label>
        </div>
        <div class="item">
          <input type="text" v-model="brand" required />
          <label>brand</label>
        </div>
        <div class="item">
          <input type="text" v-model="type" required />
          <label>type</label>
        </div>
        <div class="item">
          <input type="text" v-model="price" required />
          <label>price</label>
        </div>
        <div class="item">
          <input type="text" v-model="imageURL" required />
          <label>imageURL</label>
        </div>
        <div class="item">
          <input type="text" v-model="description" required />
          <label>description</label>
        </div>
        <button type="submit">新增</button>
        <router-link to="/admin/products"><el-button>Cencel</el-button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  name: "new-product",
  data() {
    return {
      id: null,
      date: null,
      amount: null,
      title: null,
      brand: null,
      type: null,
      price: null,
      imageURL: null,
      description: null
    };
  },
  methods: {
    saveProduct() {
      db
        .collection("products")
        .add({
          id: this.id,
          date: this.date,
          amount: this.id,
          title: this.title,
          brand: this.brand,
          type: this.type,
          price: this.price,
          imageURL: this.imageURL,
          description: this.description
        })
        .then(docRef =>
          this.$router.push("/admin/products").catch(error => console.log(err))
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  width: 500px;
  display: flex;
  flex-direction: column;
}
</style>
