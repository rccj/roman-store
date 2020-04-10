<template>
  <div class="flowers">
    <div class="flowers_wrap">
      <div class="a">a</div>
      <div class="b">b</div>
      <div class="c">c</div>
      <div class="d">d</div>
      <div class="e">e</div>
      <div class="f text_card">
        f
        <h1>Summer Sale</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla dapibus.</p>
      </div>
      <div class="g text_card">
        g
        <h1>SPECIAL SALE</h1>
        <p>Aenean malesuada hendrerit hendrerit. Curabitur pulvinar felis sed justo dignissim luctus.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style lang="scss" scoped>
@mixin column_center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.flowers {
  width: 100%;
  &_wrap {
    margin: 0 10px;
    display: grid;
    max-width: 980px;
    width: 100%;
    height: 980px;
    grid: {
      gap: 10px;
      template-columns: repeat(6, 1fr);
      template-rows: repeat(5, 1fr);
      template-areas: "a a a b b b" "c c f f d d" "c c f f d d" "c c e e g g"
        "c c e e g g";
    }
    .a {
      grid-area: a;
      height: 50px;
      align-self: flex-end;
      background: {
        image: url("../../assets/img/flower-a.jpg");
        size: cover;
        repeat: no-repeat;
        position: center 35%;
      }
    }
    .b {
      grid-area: b;
      height: 50px;
      align-self: flex-end;
      background: {
        image: url("../../assets/img/flower-b.jpg");
        size: cover;
        repeat: no-repeat;
        position: center 70%;
      }
    }
    .c {
      grid-area: c;
      background: {
        image: url("../../assets/img/flower-c.jpg");
        size: cover;
        repeat: no-repeat;
        position: center 25%;
      }
    }
    .d {
      grid-area: d;
      background: {
        image: url("../../assets/img/flower-d.jpg");
        size: cover;
        repeat: no-repeat;
        position: center 80%;
      }
    }
    .e {
      grid-area: e;
      background: {
        image: url("../../assets/img/flower-e.jpg");
        size: cover;
        repeat: no-repeat;
        position: center 25%;
      }
    }
    .f {
      grid-area: f;
    }
    .g {
      grid-area: g;
    }
    .text_card {
      @include column_center;
      text-align: center;
      > h1 {
        font-size: 1.6em;
      }
    }
  }
}
</style>