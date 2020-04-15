<template>
  <div class="body_container">
    <div class="box">
      <div class="line_area">
        <div class="line"></div>
        <div class="lineM">NEW RELEASE</div>
        <div class="line"></div>
      </div>
      <div class="content">Etiam porttitor pellentesque est, ut semper neque gravida id.</div>
    </div>
    <div class="product_container">
      <ul class="product_list">
        <li class="product_list_item" v-for="item in itemList">
          <div class="product_list_item_image" :style="{backgroundImage:`url('${item.imageURL}')`}"></div>
          <div class="product_list_item_brand">{{item.brand}}</div>
          <div class="product_list_item_title">{{item.title}}</div>
          <div class="product_list_item_price">${{item.price}}</div>
        </li>
      </ul>
    </div>
    <ul class="dots">
      <li class="dot" v-for="item in itemPage">
        <input type="radio" id="d1" :value="item" v-model="itemList" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      itemList: [],
      itemPage: []
    };
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["axiosProducts"]),

    initList() {
      const newArr = this.products;
      // console.log(newArr);
      newArr.sort(() => Math.random() - 0.5);

      const result = [];
      for (let i = 0; i < newArr.length; i += 4) {
        result.push(newArr.slice(i, i + 4)); //每四個一組
      }
      // console.log(result);
      this.itemPage = result;
      this.itemList = result[0];
      // console.log(this.itemPage);
      // console.log(this.itemList);
    }
  },
  created() {
    this.axiosProducts();
    this.initList();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.body_container {
  width: 100%;
  height: 600px;

  .box {
    display: flex;
    flex-direction: column;
    .line_area {
      display: flex;
      justify-content: center;
      .lineM {
        font-size: 1.4em;
        margin: 0 15px;
      }
      .line {
        width: 40%;
        border-top: 1px black solid;
        position: relative;
        transform: translate(0, 50%);
      }
    }
    .content {
      text-align: center;
      color: rgb(92, 90, 90);
    }
  }

  .product_container {
    display: flex;
    justify-content: center;
    width: 100%;
    .product_list {
      width: 100%;
      display: flex;
      max-width: 1400px;
      justify-content: space-around;
      margin: 50px 0;
      &_item {
        &_image {
          background: center center;
          background-size: cover;
          width: 300px;
          height: 300px;
        }
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;

    .dot {
      margin: 10px;
    }
  }
}
</style>
