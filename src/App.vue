<template>
<div>
    <router-view name="discount"></router-view>

    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-header">
                <router-link to="/" exact class="navbar-brand"><strong>E-commerce Inc.</strong></router-link>
            </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <li class="nav-item">
            <router-link to="/" exact active-class="active" class="nav-link">Product List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" active-class="active" class="nav-link">Cart</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          {{ cart.items.length }} <template v-if="cart.items.length == 1">item</template><template  v-else>items</template> in cart, totalling {{ cartTotal | currency }}

          <div style="margin-top: 8px;">
            <router-link :to="{ name: 'viewProfile' }">My Profile</router-link>
            &nbsp;
            <button v-if="auth.isLoggedIn" class="btn btn-info" @click="auth.isLoggedIn = false"> Log Out </button>
            <button v-else class="btn btn-info" @click="auth.isLoggedIn = true"> Log In </button>
          </div>
        </span>
      </div>
    </nav>

    <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
    >
        <router-view :cart="cart"></router-view>
    </transition>
    </div>
</div>
</template>

<script>
  import Product from './ProductList.vue';
  import Cart from './Cart.vue';
  import { eventBus } from './main'
  import { authService } from './main'
  import CartMixin from './mixins/cart';

  export default {
      mixins: [ CartMixin ],
      data() {
          return {
              cart: {
                  items: []
              },
              auth: authService
          };
      },
      created() {
          eventBus.$on('addItemToCart', (data) => {
              this.addProductToCart(data.product, data.quantity);
          });
      }
  }
</script>


<style>
    .flex { display:flex }
    .flex.flex-column { flex-direction: column; }
    .flex.flex-row { flex-direction: row; }
    .flex.justify-center { justify-content: center; }
    .flex.justify-left { justify-content: flex-start; }
    .flex.justify-right { justify-content: flex-end; }
    .flex.align-center { align-items: center; }
    .flex.align-left { align-items: flex-start; }
    .flex.align-right { align-items: flex-end; }
    /* Navigation */
    .navbar .stats {
        margin-top: 15px;
    }
</style>