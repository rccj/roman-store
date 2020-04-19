<template>
  <div>
    <br />
    <div>
      <form @submit.prevent="updateProduct">
        <div>
          <div>
            <input disabled type="text" v-model="id" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="title" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="brand" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="type" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="price" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="imageURL" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="description" required />
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link :to="{name:'view-product',params:{product_id:this.id}}">Cancel</router-link>
      </form>
    </div>
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
                title: this.title,
                brand: this.brand,
                type: this.type,
                price: this.price,
                imageURL:this.imageURL,
                description: this.description,
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