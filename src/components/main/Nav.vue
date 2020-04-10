<template>
    <div class="wrap">
      <div class="wrap_top">
        <div class="wrap_top_box">
          <router-link to="/">· LOGIN</router-link>
          <router-link to="/">· REGISTER</router-link>
        </div>
      </div>
      <div class="wrap_bottom">
        <div class="wrap_bottom_box">
          <div class="wrap_bottom_box_first">
            <router-link to="/" class="logo">Roman.</router-link>
            <div class="search"></div>
          </div>
          <div class="wrap_bottom_box_second">
            <router-link to="/shop">SHOP</router-link>
            <router-link to="/contact">CONTACT</router-link>
            <router-link to="/contact">CART</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">

.logo {
  font-size: 5em;
  font-weight: bold;
}
.wrap {
  &_top {
    height: 30px;
    background-color: #eee;
    width: 100%;
    display: flex;
    justify-content: center;
    
    &_box {
      margin: 0 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1400px;
      width: 100%;
      
      &>*{
        font-size:0.7em;
        font-weight: bold;
        color:#444;
      }
    }
  }
  &_bottom {
    height: 80px;
    background-color: white;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;

    &_box {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      width: 100%;

      &_second>*{
        margin-left: 20px;
      }
    }
  }
}
</style>