<template>
  <div class="body">
    <div class="checkoutTitle">Checkout</div>
    <el-steps :active="active" finish-status="success" class="steps">
      <el-step title="INFORMATION"></el-step>
      <el-step title="SHIPPING"></el-step>
      <el-step title="PAYMENT"></el-step>
      <el-step title="ORDER"></el-step>
    </el-steps>
    <div class="container">
      <div class="checkout">
        <div class="checkout-title">
          <div v-if="active == 0">CUSTOMER INFO</div>
          <div v-if="active == 1">SHIPPING INFO</div>
          <div v-if="active == 2">PAYMENT DETAIL</div>
          <div v-if="active == 3">CHECK YOUR ORDER</div>
        </div>

        <div class="checkout-top">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
            label-position="top"
            :inline="true"
          >
            <div class="information" v-if="active == 0">
              <el-form-item label="First Name" prop="firstName" size="mini">
                <el-input v-model="ruleForm.firstName"></el-input>
              </el-form-item>
              <el-form-item label="Last Name" prop="lastName" size="mini">
                <el-input v-model="ruleForm.lastName"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" prop="email" size="mini">
                <el-input v-model="ruleForm.email" type="email"></el-input>
              </el-form-item>
              <el-form-item label="Phone" prop="phone" size="mini">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
            </div>
            <div class="shipping" v-if="active == 1">
              <el-form-item label="Country" prop="country" size="mini">
                <el-input v-model="ruleForm.country"></el-input>
              </el-form-item>
              <el-form-item label="City" prop="city" size="mini">
                <el-input v-model="ruleForm.city"></el-input>
              </el-form-item>
              <el-form-item label="PostCode" prop="postcode" size="mini">
                <el-input v-model="ruleForm.postcode"></el-input>
              </el-form-item>
              <el-form-item label="Address" prop="address" size="mini">
                <el-input v-model="ruleForm.address"></el-input>
              </el-form-item>

              <el-form-item label="Message" prop="message">
                <el-input
                  type="textarea"
                  v-model="ruleForm.message"
                  placeholder="something to say?"
                ></el-input>
              </el-form-item>
            </div>
            <div class="payment" v-if="active == 2">
              <el-form-item label="Name on card" prop="nameOnCard" size="mini">
                <el-input v-model="ruleForm.nameOnCard"></el-input>
              </el-form-item>
              <el-form-item label="Credit Card Number" prop="cardNumber" size="mini">
                <el-input v-model="ruleForm.cardNumber"></el-input>
              </el-form-item>
              <el-form-item label="ExpiredDate" prop="expiredDate" size="mini">
                <el-input v-model="ruleForm.expiredDate"></el-input>
              </el-form-item>
              <el-form-item label="CVC" prop="cvc" size="mini">
                <el-input v-model="ruleForm.cvc"></el-input>
              </el-form-item>
            </div>

            <div class="orderList" v-if="active == 3">
              <div class="orderList-item">
                <div class="orderList-item-detail">
                  <div>Name:</div>
                  <div>{{this.ruleForm.firstName}} {{this.ruleForm.lastName}}</div>
                </div>
                <div class="orderList-item-detail">
                  <div>email:</div>
                  <div>{{this.ruleForm.email}}</div>
                </div>
                <div class="orderList-item-detail">
                  <div>phone:</div>
                  <div>{{this.ruleForm.phone}}</div>
                </div>
                <div class="orderList-item-detail">
                  <div>Address:</div>
                  <div>{{this.ruleForm.address}} {{this.ruleForm.city}} {{this.ruleForm.country}} {{this.ruleForm.postcode}}</div>
                </div>
                <div class="orderList-item-detail">
                  <div>payment:</div>
                  <div>Credit Card</div>
                </div>
                <div class="orderList-item-detail">
                  <div>Message:</div>
                  <div>{{this.ruleForm.message}}</div>
                </div>
                <div class="orderList-item-detail">
                  <div>Your order:</div>
                  <div>
                    <ul v-for="item in cart">
                      <li>
                        <div>{{item.title}} / {{item.brand}}</div>
                        <div>x{{item.amount}} $ {{item.price*item.amount}}</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div style="display:flex ;justify-content: space-between;">
                      <div>SUBTOTAL:</div>
                      <div>$ {{getTotalPrice}}</div>
                    </div>
                    <div style="display:flex ;justify-content: space-between;">
                      <div>SHIPPING:</div>
                      <div>$ {{shipping}}</div>
                    </div>
                    <div style="display:flex ;justify-content: space-between;">
                      <div>TAX:</div>
                      <div>$ {{getTax}}(10%)</div>
                    </div>
                    <div style="display:flex ;justify-content: space-between;">
                      <div>GRAND TOTAL:</div>
                      <div>$ {{getTotalwithTax}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <el-button type="primary" @click="submitForm(ruleForm)" size="mini">Pay</el-button>
            </div>
          </el-form>
        </div>
        <div class="checkout-bottom">
          <el-button v-if="active !==0" @click="previous" size="mini" class="el-icon-arrow-left"></el-button>
          <el-button v-if="active !==3" @click="next" size="mini" class="el-icon-arrow-right"></el-button>
        </div>
      </div>

      <div class="itemList">
        <div class="itemList-top">
          <el-table :data="cart" tooltip-effect="dark" style="width: 100%" max-height="400">
            <el-table-column label width="120">
              <template slot-scope="scope">
                <router-link :to="{name:'product-detail' ,params:{product_id:scope.row.id}}">
                  <div class="image" :style="{backgroundImage:`url('${scope.row.imageURL}')`}"></div>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column label width="120">
              <template slot-scope="scope">
                <div class="title">{{ scope.row.title}}</div>
                <div class="brand">{{ scope.row.brand}}</div>
                <div class="price">$ {{ scope.row.price}}</div>
                <i
                  class="el-icon-delete delete"
                  @click="deleteItem(scope.$index)"
                  v-if="pageFour"
                >remove</i>
              </template>
            </el-table-column>

            <el-table-column label width="150" size="mini">
              <template slot-scope="scope">
                amount:
                <el-input-number
                  :disabled="!pageFour"
                  v-model="scope.row.amount"
                  size="small"
                  controls-position="right"
                  :min="1"
                  :max="99"
                ></el-input-number>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="itemList-bottom">
          <div class="itemList-bottom-item">
            <div>SUBTOTAL:</div>
            <div>$ {{getTotalPrice}}</div>
          </div>
          <div class="itemList-bottom-item">
            <div>SHIPPING:</div>
            <div>$ {{shipping}}</div>
          </div>
          <div class="itemList-bottom-item">
            <div>TAX:</div>
            <div>$ {{getTax}}(10%)</div>
          </div>
          <div class="itemList-bottom-item">
            <div>GRAND TOTAL:</div>
            <div>$ {{getTotalwithTax}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store";
export default {
  name: "Checkout",
  data() {
    return {
      multipleSelection: [],
      num: "1",
      active: 0,
      ruleForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        postcode: "",
        message: "",
        nameOnCard: "",
        cardNumber: "",
        expiredDate: "",
        cvc: ""
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "First name,please.",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Last name,please.",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "enter legal email,please.",
            trigger: "blur"
          },
          {
            min: 10,
            max: 25,
            message: "It's ille",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "enter your phone number,please.",
            trigger: "blur"
          },
          { min: 10, max: 13, message: "", trigger: "blur" }
        ],
        country: [
          {
            required: true,
            message: "Your country,please.",
            trigger: "blur"
          }
        ],
        city: [
          {
            required: true,
            message: "Your city,please.",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "If you don't wanna get you package",
            trigger: "blur"
          }
        ],
        postcode: [
          {
            required: true,
            message: "Your postcode,please. "
          },
          {
            min: 3,
            max: 6,
            trigger: "blur"
          }
        ],
        message: [{ required: false }],
        nameOnCard: [
          {
            required: true,
            message: "Name on card,please.",
            trigger: "blur"
          }
        ],
        cardNumber: [
          {
            required: true,
            message: "Card number,please.",
            trigger: "blur"
          }
        ],
        expiredDate: [
          {
            required: true,
            message: "Card expired date,please.",
            trigger: "blur"
          }
        ],
        cvc: [
          {
            required: true,
            message: "CVC number,please.",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["cart", "totalPrice", "shipping"]),
    ...mapGetters(["getTotalPrice", "getTax", "getTotalwithTax"]),

    pageFour() {
      if (this.active !== 3) {
        return true;
      } else false;
    }
  },
  methods: {
    ...mapMutations(["deleteItem", "clearCart", "makeOrder"]),
    next() {
      if (this.active < 2) this.active += 1;
      else if (this.active == 2) {
        if (
          this.ruleForm.firstName == "" ||
          this.ruleForm.lastName == "" ||
          this.ruleForm.email == "" ||
          this.ruleForm.phone == "" ||
          this.ruleForm.country == "" ||
          this.ruleForm.address == "" ||
          this.ruleForm.postcode == "" ||
          this.ruleForm.nameOnCard == "" ||
          this.ruleForm.cardNumber == "" ||
          this.ruleForm.expiredDate == "" ||
          this.ruleForm.cvc == ""
        ) {
          alert("Fill the form,please.");
        } else {
          this.active += 1;
        }
      }
    },
    previous() {
      if (this.active > 0) this.active -= 1;
    },
    submitForm(formName) {
      new Promise(resolve => {
        this.makeOrder(formName);
        this.clearCart();
        resolve();
      }).then(() => {
        this.$router.push({ path: "/" });
        alert("Order is finished !");
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.cart == "") {
      alert("Cart is empty");
      return;
    } else next();
  }
};
</script>

<style lang="scss" scoped>
.checkoutTitle {
  font-size: 1.5em;
  font-weight: 500;
  margin: 10px 0;
}
.body {
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;

  .steps {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .checkout {
      max-width: 600px;
      width: 100%;
      max-height: 700px;

      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      box-shadow: 1px 2px 6px #555;
      margin: 0 10px 20px 10px;

      &-title {
        width: 100%;
        background-color: #c2dfea;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > * {
          font-size: 1.7em;
          color: white;
          font-weight: 500;
        }
      }

      &-top {
        width: 90%;

        .information,
        .shipping,
        .payment {
          display: flex;
          flex-direction: column;
        }
        .orderList {
          &-item {
            &-detail {
              font-weight: 500;
              display: flex;
              justify-content: space-between;
              margin-bottom: 5px;
              & > li {
                display: flex;
                justify-content: space-between;
              }
            }
          }
        }
      }
      &-bottom {
        margin-bottom: 20px;
      }
    }

    .itemList {
      max-width: 500px;
      max-height: 600px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-direction: column;

      &-bottom {
        width: 100%;
        padding: 0 10px 30px 10px;
        box-sizing: border-box;
        &-item {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
      }
    }
  }
}
.image {
  height: 80px;
  width: 80px;
  background: center center;
  background-size: cover;
}
.delete {
  cursor: pointer;
}
.brand {
  font-size: 0.8em;
  font-weight: 500;
}
@media screen and (max-width: 768px) {
  .body {
    // .steps {
    // }
    height: 100%;
    .container {
      align-items: center;
      flex-direction: column;
      .itemList {
        max-width: 300px;
        // .itemList-top {
        //   .image {
        // height: 60px;
        // width: 60px;
        //   }
        // }
      }
    }
  }
}
</style>