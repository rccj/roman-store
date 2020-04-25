<template>
  <div class="container">
    <div class="title">Recommend for you</div>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in itemList">
        <router-link :to="{name:'product-detail',params:{product_id:item.id}}">
          <div class="cover" :style="{backgroundImage:`url('${item.imageURL}')`}">
            <div>{{item.title}}</div>
          </div>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "ImageSlider",
  data() {
    return {};
  },
  computed: {
    ...mapState(["productList"]),
    itemList() {
      let newArr = this.productList;
      newArr = newArr.sort(() => Math.random() - 0.5);
      newArr = newArr.slice(0, 6);
      return newArr;
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.container {


  .title{
    margin:0 auto;
    font-size:1.5em ;
    text-align: center;
    margin-bottom:20px ;
    padding-bottom:5px ;
    border-bottom:1px solid black ;
    width:50%;
  }
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  background: center;
  .cover {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    transition: all 1s;
    &:hover {
      filter: blur(0px);
      transform: scale(1.5);
      transition: all 10s;
      & > * {
        transform: scale(0.7);
        transition: all 10s;
      }
    }
    & > * {
      height: 100%;
      color: white;
      font-size: 2.3em;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s;
      text-align: center;
    }
  }
}
@media screen and(max-width:768px ) {
  .container{
    .title{
      width: 80%;
    }
  }
}
</style>
