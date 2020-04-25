<template>
  <div class="body">
    <div class="home_man">
      <div class="logo_text">
        <p>Buy more...</p>
        <p>Do more...</p>
      </div>
    </div>
    <Flower class="flower"></Flower>
    <ImageSlider/>
    <TwoPeople/>
    <Background/>
    <LastBanner/>
  </div>
</template>

<script>
import firebase from "firebase";
import Flower from "../homepage/flower";
import ImageSlider from "../homepage/imageSlider";
import TwoPeople from "../homepage/TwoPeople";
import Background from "../homepage/Background";
import LastBanner from "../homepage/LastBanner";

export default {
  name: "Home",
  components: {
    Flower,
    ImageSlider,
    TwoPeople,
    Background,
    LastBanner,
  },
  created() {
  console.log(firebase.auth().currentUser.email)
    
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .home_man {
    width: 100%;
    height: 1000px;
    background: {
      image: url("../../assets/img/home-man.jpg");
      size: cover;
      repeat: no-repeat;
      position: center 25%;
    }
    .logo_text {
      position: relative;
      top: 50%;
      left: 10%;
      & > p {
        color: white;
        font-size: 3em;
        font-weight: bold;
      }
    }
  }
  .flower {
    display: flex;
    justify-content: center;
    position: relative;
    top: -100px;
  }
}
</style>
