<template>
  <div>
    <div class="container">
      <ul class="product">
        <li class="product_data" v-for="item in products">
          <div class="cover" :style="{backgroundImage:`url('${item.imageURL}')`}"></div>
          <div>{{item.brand}}</div>
          <div>{{item.title}}</div>
          <div>{{`$ `+item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.product {
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &_data {
    margin: 0 10px 40px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 280px;
    width: 100%;

    
    .cover {
      background: center center;
      background-size: cover;
      width: 100%;
      height: 350px;
    }
  }
}
</style>