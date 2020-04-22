<template>
  <div class="body">
    <div class="container">
      <div class="intro">
        <div class="picCon">
          <div class="pic" :style="{backgroundImage:`url('${product.imageURL}')`}">圖片</div>
        </div>
        <div class="text">
          <div class="title">{{product.title}}</div>
          <div class="brand">{{product.brand}}</div>
          <div class="price">$ {{product.price}}</div>
          <div class="description">{{product.description}}</div>
          <div>
            <el-select v-model="value" disabled placeholder="F">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input-number
              v-model="product.amount"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
          <el-button type="primary" plain @click="addCartPro(product)">
            <i class="el-icon-shopping-cart-2"></i>Add to cart
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";
import db from "../db";

import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "product-detail",
  data() {
    return {
      product: {
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
      },

      options: [
        {
          value: "one",
          label: "F"
        }
        // {
        //   value: "two",
        //   label: "S"
        // },
        // {
        //   value: "three",
        //   label: "M"
        // },
        // {
        //   value: "four",
        //   label: "L"
        // },
        // {
        //   value: "five",
        //   label: "XL"
        // }
      ],
      value: "",
      num: 1
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
            vm.product.id = doc.data().id;
            vm.product.date = doc.data().date;
            vm.product.stock = doc.data().stock;
            vm.product.amount = doc.data().amount;
            vm.product.title = doc.data().title;
            vm.product.brand = doc.data().brand;
            vm.product.type = doc.data().type;
            vm.product.price = doc.data().price;
            vm.product.imageURL = doc.data().imageURL;
            vm.product.description = doc.data().description;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    ...mapMutations(["addCart"]),
    addCartPro(item) {
      this.addCart(item);
      this.$notify({
        title: "Successfully!",
        message: "Added to cart.",
        type: "success",
        offset: 100
      });
    },
    fetchData() {
      db
        .collection("products")
        .where("id", "==", this.$route.params.product_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.product.id = doc.data().id;
            this.product.date = doc.data().date;
            this.product.stock = doc.data().stock;
            this.product.amount = doc.data().amount;
            this.product.title = doc.data().title;
            this.product.brand = doc.data().brand;
            this.product.type = doc.data().type;
            this.product.price = doc.data().price;
            this.product.email = doc.data().email;
            this.product.imageURL = doc.data().imageURL;
            this.product.description = doc.data().description;
          });
        });
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss" scoped>
.body {
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    .intro {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .picCon {
        width: 50%;
        height: 500px;
        padding: 30px;
        box-sizing: border-box;

        .pic {
          height: 100%;
          width: 100%;
          background: center center;
          background-size: cover;
          border-radius: 5px;
        }
      }
      .text {
        width: 50%;
        height: 500px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 30px;
        box-sizing: border-box;

        .title {
          font-size: 1.7em;
          font-weight: 500;
          border-bottom: 1px black solid;
        }
        .brand {
          font-size: 1.5;
          font-weight: 900;
        }
        .description {
          text-align: center;
        }
      }
    }
  }
}
</style>