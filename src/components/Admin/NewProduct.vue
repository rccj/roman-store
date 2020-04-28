<template>
  <div>
    <div class="container">
      <form @submit.prevent="saveProduct" class="list">
        <h1 class="title">新增商品</h1>
        <div class="item">
          <label>ID#</label>
          <input type="text" v-model="id" required disabled/>
        </div>
        <div class="item">
          <label>date</label>
          <input type="date" v-model="date" required />
        </div>
        <div class="item">
          <!-- <input type="text" v-model="stock" required /> -->
          <label>stock</label>
          <el-input-number size="mini" :min="0" :max="999" v-model="stock" required></el-input-number>
        </div>
        <div class="item">
          <label>amonut</label>
          <input type="text" v-model="amount" disabled />
        </div>
        <div class="item">
          <label>title</label>
          <input type="text" v-model="title" required />
        </div>
        <div class="item">
          <label>brand</label>
          <input type="text" v-model="brand" required />
        </div>
        <div class="item">
          <label>type</label>
          <input type="text" v-model="type" required />
        </div>
        <div class="item">
          <label>price</label>
          <input type="text" v-model="price" required />
        </div>
        <div class="item">
          <label>imageURL</label>
          <input type="text" v-model="imageURL" required />
        </div>
        <div class="item">
          <label>description</label>
          <input type="text" v-model="description" required />
        </div>
        <div class="btns">
          <button type="submit">新增</button>
          <router-link :to="{name: 'products'}">
            <button>Cencel</button>
          </router-link>
        </div>
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
      stock: null,
      amount: 1,
      title: null,
      brand: null,
      type: null,
      price: null,
      imageURL: null,
      description: null
    };
  },
  computed: {
    ...mapState(["productList"])
  },
  methods: {
    saveProduct() {
      db
        .collection("products")
        .add({
          id: this.id,
          date: this.date,
          stock: this.stock,
          amount: this.amount,
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
  },
  created() {
    let idLast = this.productList[this.productList.length - 1].id;
    let idNow = Number(idLast) + 1;
    idNow = String(idNow);
    console.log(typeof idNow);
    if (idNow.length == 1) {
      idNow = "00" + idNow;
    }
    if (idNow.length == 2) {
      idNow = "0" + idNow;
    }
    this.id = idNow;
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.title {
  text-align: center;
  font-size: 1.6em;
  margin: 10px 0;
}
.list {
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    & > * {
      margin-left: 10px;
    }
  }
}
</style>
