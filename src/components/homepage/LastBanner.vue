<template>
  <div class="container">
    <div class="title">@Lorem, ipsum.</div>
    <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fuga!</div>
    <div class="photos">
      <div class="photo photo_a"></div>
      <div class="photo photo_b"></div>
      <div class="photo photo_c"></div>
      <div class="photo photo_d"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastBanner"
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    padding: 0 10px;
    text-align: center;
  }
  & > * {
    margin-bottom: 20px;
  }
  .title {
    font-size: 1.5em;
    font-weight: 500;
  }
  .photos {
    max-width: 1400px;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .photo {
      height: 100%;
      width: 23%;
      background: {
        size: cover;
        position: center 50%;
      }
    }
    .photo_a {
      background-image: url(../../assets/img/last-1.jpg);
    }
    .photo_b {
      background-image: url(../../assets/img/last-2.jpg);
    }
    .photo_c {
      background-image: url(../../assets/img/last-3.jpg);
    }
    .photo_d {
      background-image: url(../../assets/img/last-4.jpg);
    }
  }
}
@media screen and(max-width:768px ) {
  .container {
    height: 900px;

    .photos {
      flex-wrap: wrap;
      .photo {
        width: 48%;
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and(max-width:480px ) {
  .container {
    height: 1700px;

    .photos {
      .photo {
        width: 95%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>