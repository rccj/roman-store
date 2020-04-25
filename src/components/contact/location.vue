<template>
  <div class="container">
    <div class="title">STORE</div>
    <div class="itemList">
      <div class="item">
        <div>Knightsbridge</div>
        <div>109 - 125 Knightsbridge</div>
        <div>London</div>
        <div>SW1X 7RJ</div>
        <div>Tel: +44 (0)20 7235 5000</div>
        <div>Email: Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="item">
        <div>Knightsbridge</div>
        <div>109 - 125 Knightsbridge</div>
        <div>London</div>
        <div>SW1X 7RJ</div>
        <div>Tel: +44 (0)20 7235 5000</div>
        <div>Email: Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="item">
        <div>Knightsbridge</div>
        <div>109 - 125 Knightsbridge</div>
        <div>London</div>
        <div>SW1X 7RJ</div>
        <div>Tel: +44 (0)20 7235 5000</div>
        <div>Email: Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="item">
        <div>Knightsbridge</div>
        <div>109 - 125 Knightsbridge</div>
        <div>London</div>
        <div>SW1X 7RJ</div>
        <div>Tel: +44 (0)20 7235 5000</div>
        <div>Email: Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .title {
    font-size: 1.6em;
    font-weight: 600;
  }

  .itemList {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      text-align: center;
      margin: 30px 0;

      & > :first-child {
        text-align: center;
        font-weight: 500;
        font-size: 1.4em;
        margin-bottom: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    .itemList {
      .item {
        width: 100%;
      }
    }
  }
}
</style>