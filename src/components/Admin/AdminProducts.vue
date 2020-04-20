<template>
  <div>
    <el-table
      :data="productList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="#id" prop="id" width="50px"></el-table-column>
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="Brand" prop="brand"></el-table-column>
      <el-table-column label="Title" prop="title"></el-table-column>
      <el-table-column label="$" prop="price"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Search" />
        </template>
        <template slot-scope="scope">
          <router-link :to="{name:'view-product',params:{product_id: scope.row.id}}">
            <el-button size="mini" class="el-icon-view">View</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <router-link to="/new-product">
      <i class="el-icon-circle-plus"></i>
    </router-link>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState(["productList"])
  },
  methods: {
    ...mapActions(["getFireProducts"])
  },
  created() {
    this.getFireProducts();
    console.log(this.productList);
  }
};
</script>
<style lang="scss" scoped>
</style>
