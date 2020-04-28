<template>
  <div>
    <div class="container">
      <ul class="product">
        <li class="product_data" v-for="item in productList">
          <div class="cover" :style="{backgroundImage:`url('${item.imageURL}')`}">
            <router-link :to="{name:'product-detail',params:{product_id: item.id}}">
              <el-button type="text" size="mini" class="el-icon-view"></el-button>
            </router-link>
          </div>
          <div>{{item.brand}}</div>
          <div>{{item.title}}</div>
          <div>{{`$ `+item.price}}</div>
          <div>
            <el-button
              plain
              size="mini"
              @click="addCartPro(item)"
              class="el-icon-shopping-cart-2"
              type="icon"
            ></el-button>
            <router-link :to="{name:'product-detail',params:{product_id: item.id}}">
              <el-button plain type="icon" size="mini" class="el-icon-view"></el-button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <!-- <button @click="testMemberCart">test</button> -->

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Products",
  data() {
    return {
      // test:[1,2,3,4]
    };
  },

  computed: {
    ...mapState(["productList"])
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

    testMemberCart() {
      console.log(this.productList);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;

  .product {
    // max-width: 1400px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &_data {
      margin: 0 10px 40px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 17%;

      .cover {
        background: center center;
        background-size: cover;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s;

        &:hover {
          // transform: scale(1.5);
          filter: blur(5px);
          transition: all 20s;

          & > :first-child {
            display: flex;
          }
        }
        & > :first-child {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .product {
      &_data {
        width: 22%;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .product {
      &_data {
        width: 30%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .product {
      &_data {
        width: 45%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .product {
      &_data {
        width: 100%;
      }
    }
  }
}
</style>