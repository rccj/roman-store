<template>
  <div>
    <div class="container">
      <ul class="product">
        <li class="product_data" v-for="(item,index) in productList">
          <div class="cover" :style="{backgroundImage:`url('${item.imageURL}')`}"></div>
          <div>{{item.brand}}</div>
          <div>{{item.title}}</div>
          <div>{{`$ `+item.price}}</div>
          <button>
            <label v-if="1">加到購物車</label>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Products",

  computed: {
    ...mapState(["productList"]),//fire
  },
  methods: {
    ...mapActions(["getFireProducts"]) //fire
  },

  created() {
    this.getFireProducts()//fire

  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.product {
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &_data {
    margin: 0 10px 40px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;

    .cover {
      background: center center;
      background-size: cover;
      width: 100%;
      height: 350px;
    }
  }
}
</style>