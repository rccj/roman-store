<template>
  <div class="thepage">
    <div class="container">
      <div>CONTACT US</div>
      <div class="list">
        <router-link to="/contact/services" class="list_item">SERVICES</router-link>
        <router-link to="/contact/location" class="list_item">LOCATION</router-link>
        <router-link to="/contact/terms" class="list_item">TERMS OF USE</router-link>
        <router-link to="/contact/privacy" class="list_item">PRIVACY</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.thepage {
  display: flex;
  justify-content: center;
}
.container {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  & > div:first-child {
    font-size: 2em;

  }
  .list{
    display: flex;
    flex-wrap: wrap;
    &_item{
      margin: 0 10px;
    }
  }
}
</style>

