<template>
  <div class="container">
    <div class="to_bar">
      <div class="to_bar_box">
        <div class="to_bar_box_sign">Lorem ipsum dolor</div>
        <div class="to_bar_box_store">saepe</div>
      </div>
    </div>
    <div class="bottoms">
      <div class="bottoms_box">
        <ul class="content">
          <li>
            <div>Customer Care</div>
            <div></div>
          </li>
          <li>
            <div>About</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam eveniet saepe deserunt odit, recusandae unde minus doloremque numquam dolorum</p>
          </li>
          <li>
            <div>Products</div>
          </li>
        </ul>
        <ul class="icon">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <p>© Lorem ipsum Ducimus sit tempore minus praesentium vitae! Animi?</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .to_bar {
    height: 60px;
    width: 100%;
    background-color: #6c757d;
    display: flex;
    justify-content: center;

    &_box {
      width: 100%;
      max-width: 1400px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .bottoms {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_box {
      width: 100%;
      max-width: 1400px;
      &>p{
        text-align: center;
      }
      .content {
        display: flex;
        & > * {
          flex: 1;
        }
      }

      .icon{
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>