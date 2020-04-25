<template>
  <div class="thepage">
    <div class="container">
      <router-link :to="{name: 'contact'}" class="list_item">
        <div @click="onImg" class="title">CONTACT US</div>
      </router-link>
      <div class="list">
        <div @click="offImg" class="list_item">
          <router-link :to="{name: 'services'}">SERVICES</router-link>
        </div>
        <div @click="offImg" class="list_item">
          <router-link :to="{name: 'location'}">LOCATION</router-link>
        </div>
        <div @click="offImg" class="list_item">
          <router-link :to="{name: 'terms'}">TERMS OF USE</router-link>
        </div>
        <div @click="offImg" class="list_item">
          <router-link :to="{name: 'privacy'}">PRIVACY</router-link>
        </div>
      </div>
      <router-view />
      <div v-if="showImg" class="cover"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      showImg: true
    };
  },
  methods: {
    offImg() {
      this.showImg = false;
    },
    onImg() {
      this.showImg = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.thepage {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    .title {
      font-weight: 700;
      font-size: 2em;
      margin: 20px 0;
    }
    .list {
      display: flex;
      &_item {
        margin: 5px 10px;
        font-weight: 800;
      }
    }
  }
  .cover {
    width: 100%;
    height: 400px;
    background: {
      image: url("../../assets/img/contact-1.jpg");
      size: cover;
      position: 70% 30%;
    }
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 960px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
  .list {
    flex-direction: column;
  }
}
</style>

