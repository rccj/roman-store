<template>
  <div class="container">
    <ul>
      <li v-for="item in cart">
        <div>{{item.title}}</div>
        <div>{{item.price}}</div>
        <button @click="deleteItem">移除</button>
      </li>
    </ul>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name:'Cart',
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['cart']),
  },
  methods:{
    ...mapMutations(['deleteItem']),
  },

}
</script>