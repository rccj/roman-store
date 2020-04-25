<template>
  <div class="container">
    <div class="item">
      <div>COPYRIGHT</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa corrupti eveniet totam explicabo suscipit maxime, ipsa cupiditate et fugiat velit. Illum, eum obcaecati necessitatibus quis praesentium, sit numquam iste perspiciatis nemo, facere cumque fuga inventore ipsum tempore maxime distinctio.</div>
    </div>
    <div class="item">
      <div>PAYMENT</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic, fugiat mollitia odit necessitatibus sed dolor amet excepturi nam. Eius ipsa tempora eaque natus, mollitia labore quod, aspernatur nostrum reiciendis quae quis fugit odit expedita sed? Nobis assumenda iste doloremque!</div>
    </div>
    <div class="item">
      <div>TAXES</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic, fugiat mollitia odit necessitatibus sed dolor amet excepturi nam. Eius ipsa tempora eaque natus, mollitia labore quod, aspernatur nostrum reiciendis quae quis fugit odit expedita sed? Nobis assumenda iste doloremque!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;

    .item{
      width: 100%;
      margin-bottom: 30px;

      &>:first-child{
        font-size:1.5em;
        font-weight: 500;
        margin-bottom: 15px;
      }
    }
  }
</style>