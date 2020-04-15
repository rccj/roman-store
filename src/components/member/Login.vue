<template>
  <div class="container">
    <div class="box">
      <h1>Login</h1>
      <div>username</div>
      <input  type="text" placeholder="RomanChen" style="outline:none;" v-model="member.useName"/>
      <div>password</div>
      <input type="password" placeholder="six or more characters" style="outline:none;" v-model="member.passWord"/>
      <br>
      <input type="submit" value="sign in" @click="signIn()"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      member:{
        useName:'',
        passWord:'',
      },
      memberData:[],
    }
  },
  methods:{
    ...mapActions(["axiosSignIn"]),
    signIn(){
       this.axiosSignIn(this.memberData)
    }
  }
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  .box {
    width: 400px;
    display: flex;
    flex-direction: column;
    & > h1 {
      text-align: center;
    }
    & > * {
      margin-bottom: 5px;
    }
  }
}
</style>