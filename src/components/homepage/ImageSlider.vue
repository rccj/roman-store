<template>
  <div class="body_container">
    <div class="box">
      <div class="line_area">
        <div class="line"></div>
        <div class="lineM">NEW RELEASE</div>
        <div class="line"></div>
      </div>
      <div class="content">
        Etiam porttitor pellentesque est, ut semper neque gravida id.
      </div>
    </div>
    <div class="product_container">
      <ul class="product_list" >
        <li class="product_list_item">
          <div class="product_list_item_pic"></div>
          <div class="product_list_item_text"></div>
          <div class="product_list_item_price"></div>
        </li>
      </ul>
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style lang="scss" scoped>
.body_container {
  width: 100%;
  height: 700px;
  border: 1px solid black;
  .box {
    display: flex;
    flex-direction: column;
    .line_area {
      display: flex;
      justify-content: center;
      .lineM {
        font-size: 1.4em;
        margin: 0 15px;
      }
      .line {
        width: 40%;
        border-top: 1px black solid;
        position: relative;
        transform: translate(0, 50%);
      }
    }
    .content {
      text-align: center;
      color: rgb(92, 90, 90);
    }
  }
}
</style>
