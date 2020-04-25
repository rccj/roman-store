<template>
  <!-- 冒泡事件處理 -->
  <div @click.capture="showSort = false">
    <div class="shop_page">
      <div class="page_box">
        <div class="page_box_text">
          <h1>Autumn Wears</h1>
          <p>Nulla auctor, sem ac blandit feugiat, turpis massa rhoncus orci, sit amet ornare magna est et nisi.</p>
          <!-- <button @click="testProdcutList">test</button> -->
        </div>
        <div class="page_box_color"></div>
        <div class="page_box_pic">
          <div class="page_box_pic_bg">
            <div class="page_box_pic_bg_main"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="type_bar">
      <div class="_filter">
        <!-- <div class="_btn">Filter</div> -->
        <el-cascader
          placeholder="Filter"
          clearable
          v-model="value"
          :options="getFilterList"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange(value)"
          size="mini"
        ></el-cascader>
      </div>
      <!-- 冒泡事件處理 -->
      <div class="_sort" @click.capture="showSort =!showSort">
        <div class="_btn">Sort by</div>
        <ul class="_list" v-if="showSort">
          <li @click="setProductsLowToHigh">Price (low to high)</li>
          <li @click="setProductsHighToLow">Price (high to low)</li>
          <li @click="getFireProducts"></li>
        </ul>
      </div>
    </div>
    <Products class="products"></Products>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Products from "./Products";

export default {
  name: "Shop",

  data() {
    return {
      value: [],
      showSort: false
    };
  },
  components: {
    Products
  },
  computed: {
    ...mapState(["productList"]),
    ...mapGetters(["getFilterList"])
  },

  methods: {
    ...mapMutations([
      "setProductsLowToHigh",
      "setProductsHighToLow",
      "setFilter"
    ]),
    ...mapActions(["getFireProducts"]),
    testProdcutList() {
      console.log(this.getFilterList);
    },
    handleChange(value) {
      this.getFireProducts()
      .then(()=> this.setFilter(value))
      
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_page {
  width: 100%;
  height: 570px;
  margin: 60px 0;
  background-color: #dcecf2;
  display: flex;
  align-items: center;
  justify-content: center;

  .page_box {
    width: 100%;
    // max-width: 1400px;
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
      right: 30%;
      width: 40%;
      // height: 100%;
      height: 350px;
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

.type_bar {
  width: 100%;
  height: 35px;
  background-color: #c2dfea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  ._filter {
    width: 30%;
  }
  ._sort {
    width: 30%;
  }
  ._btn {
    text-align: center;

    &:hover {
      color: white;
    }
  }
  ._list {
    // display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    margin-top: 10px;
    padding: 5px 0;
    width: 30%;
    display: flex;
    flex-direction: column;

    & > li {
      padding: 5px;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      &:hover {
        background-color: #f8f9fa;
      }
      &:active {
        background-color: #007bff;
      }
    }
  }
}

.products {
  margin: 50px 0;
}
</style>


