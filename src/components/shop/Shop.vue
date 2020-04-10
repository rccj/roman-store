<template>
  <div>
    <div class="shop_page">
      <div class="page_box">
        <div class="page_box_text">
          <h1>Autumn Wears</h1>
          <p>Nulla auctor, sem ac blandit feugiat, turpis massa rhoncus orci, sit amet ornare magna est et nisi.</p>
        </div>
        <div class="page_box_color"></div>
        <div class="page_box_pic">
          <div class="page_box_pic_bg">
            <div class="page_box_pic_bg_main"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <h1>SHOP</h1>
      <router-link to="/shop/1">1</router-link>
      <router-link to="/shop/2">2</router-link>
      <router-link to="/shop/3">3</router-link>
      <div>{{id}}</div>
    </div> -->
    <Products></Products>
  </div>
</template>

<script>
const products = {
  1: "T-Shirt",
  2: "Shoes",
  3: "Pants"
};
import Products from "./Products";

export default {
  components: {
    Products,
  },
  computed: {
    id() {
      return products[this.$route.params.id];
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_page {
  height: 570px;
  margin: 60px 0;
  background-color: #dcecf2;
  display: flex;
  align-items: center;

  .page_box {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    &_text {
      width: 50%;
      height: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10%;
      box-sizing: border-box;
      & > p {
        text-align: center;
      }
    }
    &_color {
      position: absolute;
      right: 20%;
      width: 50%;
      height: 45%;
      background-color: #c7ddea;
    }
    &_pic {
      width: 50%;
      height: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      &_bg {
        width: 70%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          270deg,
          rgba(59, 141, 153, 0.5) rgba(108, 107, 131, 0.5),
          rgba(170, 75, 107, 0.5)
        );
        &_main {
          width: 94%;
          height: 94%;
          background: {
            image: url("../..//assets/img/shop/shop-woman.jpg");
            size: cover;
            repeat: no-repeat;
            position: center 35%;
          }
        }
      }
    }
  }
}
</style>
