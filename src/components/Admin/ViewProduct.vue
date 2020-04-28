<template>
  <div class="container">
    <ul class="list">
      <li>
        <h4 class="title">{{title}}</h4>
      </li>
      <li>
        <div>ID #：</div>
        <div>{{id}}</div>
      </li>
      <li>
        <div>date：</div>
        <div>{{date}}</div>
      </li>
      <li>
        <div>stock：</div>
        <div>{{stock}}</div>
      </li>
      <li>
        <div>amount：</div>
        <div>{{amount}}</div>
      </li>
      <li>
        <div>title：</div>
        <div>{{title}}</div>
      </li>
      <li>
        <div>brand：</div>
        <div>{{brand}}</div>
      </li>
      <li>
        <div>type：</div>
        <div>{{type}}</div>
      </li>
      <li>
        <div>price：</div>
        <div>{{price}}</div>
      </li>
      <li>
        <div>imageURL：</div>
        <div>{{imageURL}}</div>
      </li>
      <li>
        <div>description：</div>
        <div>{{description}}</div>
      </li>
      <li class="btns">
        <router-link :to="{name: 'products'}">
          <button class="btn">Back</button>
        </router-link>
        <button @click="deleteProduct" class="btn red">Delete</button>
        <div>
          <router-link :to="{name:'edit-product',params:{product_id:this.id}}">
            <button class="btn">Edit</button>
          </router-link>
        </div>
      </li>
    </ul>
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
    deleteProduct() {
      if (confirm("Are you sure?")) {
        db
          .collection("products")
          .where("id", "==", this.$route.params.product_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/admin/products");
            });
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;

  .title {
    font-size: 1.5em;
  }
  .list {
    width: 500px;
    .btns {
      margin: 10px 0;
      .btn {
        margin-left: 5px;
      }
    }

    & > * {
      display: flex;
    }
  }
}
</style>