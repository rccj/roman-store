<template>
  <div class="body">
    <div class="container">
      <el-table :data="cart" tooltip-effect="dark" style="width: 100%" max-height="600">
        <el-table-column label="amount" width="150">
          <template slot-scope="scope">
            <router-link :to="{name:'product-detail' ,params:{product_id:scope.row.id}}">
              <div class="image" :style="{backgroundImage:`url('${scope.row.imageURL}')`}"></div>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column label="title" width="120">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>

        <el-table-column prop="brand" label="brand" width="120"></el-table-column>

        <el-table-column label="amount" width="150">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.amount"
              size="small"
              controls-position="right"
              :min="1"
              :max="99"
            ></el-input-number>
          </template>
        </el-table-column>

        <el-table-column label="price" width="80">
          <template slot-scope="scope">{{ scope.row.price * scope.row.amount}}</template>
        </el-table-column>

        <el-table-column label width="120">
          <template slot-scope="scope">
            <el-button @click="deleteItem(scope.$index)" type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column> -->
      </el-table>
      Total :{{totalCost}}
      <!-- <ul>
        <li v-for="item in cart">
          <div>{{item.title}}</div>
          <div>{{item.price}}</div>
          <button @click="deleteItem">移除</button>
        </li>
      </ul>-->
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      multipleSelection: [],
      num: "1"
    };
  },
  computed: {
    ...mapState(["cart", "totalPrice"]),
    totalCost(){
      let total = this.cart.reduce((prev, item) => {
        return prev + item.price * item.amount;
      }, 0);
      return total
    }
  },
  methods: {
    ...mapMutations(["deleteItem", "getTotalPrice"])
  }

  //  watch:{
  //    iuput:{
  //      this.getTotalPrice()
  //    }
  //  }
};
</script>
<style lang="scss" scoped>
.body {
  max-height: 1000px;
  min-height: 500px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  .container {
    margin: 50px 0;
    max-width: 750px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.image {
  height: 100px;
  width: 100px;
  background: center center;
  background-size: cover;
}
</style>