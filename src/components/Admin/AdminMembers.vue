<template>
    <div>
      <el-table
        :data="memberList.filter(data => !search 
      || data.userName.toLowerCase().includes(search.toLowerCase())
      || data.email.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="#id" prop="id" width="50px"></el-table-column>
        <el-table-column label="auth" prop="auth" width="90px"></el-table-column>
        <el-table-column label="userName" prop="userName" width="100px" ></el-table-column>
        <el-table-column label="email" prop="email"></el-table-column>

        <el-table-column align="center" width="120px">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="Search" />
          </template>
        
          <template slot-scope="scope">
            <router-link :to="{name:'view-member',params:{member_id: scope.row.id}}">
              <el-button size="mini" class="el-icon-view">View</el-button>
            </router-link>
          </template>
          
        </el-table-column>
      </el-table>
      <router-link :to="{name: 'new-member'}">
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
      search: "",
      show3: true
    };
  },
  computed: {
    ...mapState(["memberList"])
  },
  methods: {
    ...mapActions(["getFireMember"]),
    // handleEdit(index, row) {
    //   console.log(index, row);
    // }
  },
  mounted() {
    this.getFireMember();
  }
};
</script>
<style lang="scss" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
