<template>
  <div>
    <div class="container">
      <h1>會員</h1>
      <ul class="list">
        <li v-for="member in memberList">
          <div>id# {{member.id}}</div>
          <div>auth：{{member.auth}}</div>
          <div>email：{{member.email}}</div>
          <div>userName：{{member.userName}}</div>
          <router-link :to="{name:'view-member',params:{member_id: member.id}}">go</router-link>
          <br />
          <br />
        </li>
      </ul>
      <router-link to="/new-member">
        <button>[+]</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["memberList"])
  },
  methods: {
    ...mapActions(["getFireMember"])
  },
  mounted() {
    this.getFireMember();
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  width: 500px;
  display: flex;
  flex-direction: column;
}
.cover {
  width: 100px;
  height: 100px;
  background: center center;
  background-size: cover;
  width: 100%;
  height: 350px;
}
</style>
