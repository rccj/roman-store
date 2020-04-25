<template>
  <div class="container">
    <div class="first">
      <div>CUSTOMER SERVICES</div>
      <div>Our consultants are available Monday - Saturday, 9am - 8pm (GMT), and Sunday, 11am - 6pm(GMT). If you get in touch outside of these hours, we will aim to respond to you as promptly as possible the next working day.</div>
    </div>
    <div class="seconds">
      <div>Telephone</div>
      <div>Please call: Lorem ipsum dolor sit amet.</div>
    </div>
    <div class="seconds">
      <div>Email</div>
      <div>Lorem ipsum dolor Illo, necessitatibus.</div>
    </div>
    <div class="seconds">
      <div>Post</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .first {
    margin: 10px;
    text-align: center;

    & > :first-child {
      margin: 5px;
      font-size: 1.6em;
      font-weight: 600;
      text-align: center;
    }
  }
  .seconds {
    margin: 10px;
    text-align: center;
    & > :first-child {
      margin: 5px;
      font-size: 1.4em;
      font-weight: 500;
    }
  }
}
</style>