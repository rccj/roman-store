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
          <li class="mm">
            <div class="content_title">Customer Care</div>
            <div class="content_sub">
              <div>CONTACT US</div>
              <div>FAQS</div>
              <div>TERM OF USE</div>
            </div>
          </li>
          <li class="mm">
            <div class="content_title">About</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam eveniet saepe deserunt odit, recusandae unde minus doloremque numquam dolorum</p>
          </li>
          <li class="mm">
            <div class="content_title">Products</div>
            <div class="content_sub">
              <div>OUR STORE</div>
              <div>SHIPPING</div>
              <div>PRIVACY</div>
            </div>
          </li>
        </ul>
        <ul class="icon">
          <font-awesome-icon size="lg" :icon="['fab', 'google']" />
          <li>
            <a
              href="https://www.youtube.com/channel/UCHnKh4HWH0F6MTqTfHfI4mw?view_as=subscriber"
              target="_blank"
            >
              <font-awesome-icon size="lg" :icon="['fab', 'youtube']" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/roman.chen/" target="_blank">
              <font-awesome-icon size="lg" :icon="['fab', 'instagram-square']" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100000323340785" target="_blank">
              <font-awesome-icon size="lg" :icon="['fab', 'facebook']" />
            </a>
          </li>
          <font-awesome-icon size="lg" :icon="['fab', 'twitter']" />
        </ul>
        <p>Copyright © 2020 RoamnChen.Say hello to you.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
.mm > * {
  margin: 10px 0;
}

p {
  margin: 20px 0;
}
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
      margin: 0 30px;
    }
  }
  .bottoms {
    display: flex;
    justify-content: center;
    padding: 0 30px;

    &_box {
      width: 100%;
      max-width: 1400px;
      margin: 30px 0;

      & > p {
        text-align: center;
      }
      .content {
        display: flex;
        justify-content: space-between;
        &_title {
          border-bottom: 1px solid black;
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
        & > * {
          width: 30%;
        }
        &_title {
          font-size: 1.3em;
          font-weight: 500;
        }
      }

      .icon {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .container {
    .bottoms {
      .bottoms_box {
        .content {
          display: flex;
          flex-direction: column;
          .mm {
            width: 100%;
            .content_title {
              text-align: center;
              margin: 30px 0;
              padding-bottom: 10px;
            }
            .content_sub {
              display: flex;
              justify-content: space-around;
            }
            // &>:first-child{
            //   text-align: center;
            // }
          }
        }
      }
    }
  }
}
</style>