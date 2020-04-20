<template>
  <div>
    <ul>
      <li>
        <h4>{{title}}</h4>
      </li>
      <li>ID#：{{id}}</li>
      <li>date：{{date}}</li>
      <li>amount：{{amount}}</li>
      <li>title：{{title}}</li>
      <li>brand：{{brand}}</li>
      <li>type：{{type}}</li>
      <li>price：{{type}}</li>
      <li>imageURL：{{imageURL}}</li>
      <li>description：{{description}}</li>
    </ul>
    <router-link to="/admin/products">Back</router-link>
    <button @click="deleteProduct" class="btn red">Delete</button>
    <div>
      <router-link :to="{name:'edit-product',params:{product_id:this.id}}">Edit</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from "../db";

export default {
  name: "view-product",
  data() {
    return {
      id: null,
      date:null,
      amount:null,
      title: null,
      brand: null,
      type:null,
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
            vm.amount= doc.data().amount;
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
      db.collection("products")
        .where("id", "==", this.$route.params.product_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.data().id;
            this.date = doc.data().date;
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
        db.collection("products")
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