<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="bg-dark" variant="info">
    <b-navbar-brand href="#" class="text text-light" id="title">Wampayb</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav v-if="auth.user===null">
      <b-navbar-nav class="ml-auto">
        <b-nav-item  v-on:click="redirect('/Login')"  class="text-right text-light" id="login">Login</b-nav-item>
        <b-nav-item  v-on:click="redirect('/Register')" class="text-right text-light" id="signup">Sign Up</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</div>
</template>


<style scoped lang="scss">
  @import"~assets/colors.scss";
  #title {
    color: $danger !important;
  }

</style>

<script>
import ROUTER from "router";
import AUTH from "services/auth";
export default {
  data(){
    return{
      auth: AUTH
    }
  },
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>



