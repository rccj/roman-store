<template>
  <div class="container">
    <div class="_image">
        <div class="_text">Proin semper nisl vel eros porta volutpat.</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "background"
};
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 100px 0;

  ._image {
    width: 100%;
    height: 100%;
    background: {
      image: url(../../assets/img/background.jpg);
      size: cover;
      position: center;
      attachment: fixed;
    }
  }
  ._text {
    color: #fff;
    font: {
      size: 1.4em;
      weight: 500;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>