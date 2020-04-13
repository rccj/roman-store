<template>
  <div class="container">
    <div class="container_box">
      <div class="_img _img_first">
        <div class="_color">
          <div>Brand New!</div>
          <div>Sed hendrerit enim id tempor semper</div>
          <button class="_btn">Shop now</button>
        </div>
      </div>
    </div>
    <div class="container_box">
      <div class="_img _img_second">
        <div class="_color">
          <div>Brand New!</div>
          <div>Sed hendrerit enim id tempor semper</div>
          <button class="_btn">Shop now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: space-around;
  padding: 3% 0;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(194, 223, 234, 0.8), #fff);

  &_box {
    height: 80%;
    width: 40%;
    ._img_first {
      background-image: url("../../assets/img/twoP-1.jpg");
    }
    ._img_second {
      background-image: url("../../assets/img/twoP-2.jpg");
    }

    ._img {
      width: 100%;
      height: 100%;
      background: {
        size: cover;
        position: center 50%;
      }
      position: relative;

      ._color {
        width: 85%;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #c2dfea;
        padding: 10px 0 20px 0;

        & > div:first-child {
          font-size: 1.3em;
          font-weight: 500;
          text-shadow: 1px 1px 1px #fff;
          
        }
        & > div:nth-child(2) {
          color: #dcecf2;
          text-align: center;
        }

        ._btn {
          position: absolute;
          bottom: -40%;
          width: 50%;
          height: 60%;
          font-size: 1em;
          box-shadow: 1px 1px 2px #555;
          color: #fff;
          background-color: #343a40;
          border-color: #343a3c;
        }
      }
    }
  }
}
</style>