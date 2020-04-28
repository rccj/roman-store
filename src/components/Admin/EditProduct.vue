<template>
  <div class="container">
    <form class="list" @submit.prevent="updateProduct">
      <div class="title">Update Product</div>

      <div>
        <input disabled type="text" v-model="id" required />
      </div>
      <div>
        <input type="date" v-model="date" required />
      </div>
      <div>
        <input type="text" v-model="stock" required />
      </div>
      <div>
        <input type="text" v-model="amount" required />
      </div>
      <div>
        <input type="text" v-model="title" required />
      </div>
      <div>
        <input type="text" v-model="brand" required />
      </div>
      <div>
        <input type="text" v-model="type" required />
      </div>
      <div>
        <input type="text" v-model="price" required />
      </div>
      <div>
        <div>
          <input type="text" v-model="imageURL" required />
        </div>
      </div>
      <div>
        <input type="text" v-model="description" required />
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link :to="{name:'view-product',params:{product_id:this.id}}">Cancel</router-link>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../db";

export default {
  name: "view-product",
  data() {
    return {
      id: null,
      date: null,
      stock: null,
      amount: null,
      title: null,
      brand: null,
      type: null,
      price: null,
      imageURL: null,
      description: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection("products")
      .where("id", "==", to.params.product_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id = doc.data().id;
            vm.date = doc.data().date;
            vm.stock = doc.data().stock;
            vm.amount = doc.data().amount;
            vm.title = doc.data().title;
            vm.brand = doc.data().brand;
            vm.type = doc.data().type;
            vm.price = doc.data().price;
            vm.imageURL = doc.data().imageURL;
            vm.description = doc.data().description;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db
        .collection("products")
        .where("id", "==", this.$route.params.product_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.data().id;
            this.date = doc.data().date;
            this.stock = doc.data().stock;
            this.amount = doc.data().amount;
            this.title = doc.data().title;
            this.brand = doc.data().brand;
            this.type = doc.data().type;
            this.price = doc.data().price;
            this.imageURL = doc.data().imageURL;
            this.description = doc.data().description;
          });
        });
    },
    updateProduct() {
      db
        .collection("products")
        .where("id", "==", this.$route.params.product_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
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
              .then(() => {
                this.$router.push({
                  name: "view-product",
                  params: { product_id: this.id }
                });
              });
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  .title{
    font-size:1.5em;
    text-align: center;
  }
  .list {
    width: 200px;
    & > * {
      margin: 5px 0;
    }
    & input {
      width: 100%;
      height: 30px;
    }
  }
}
</style>