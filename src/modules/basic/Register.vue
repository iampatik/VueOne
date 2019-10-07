<template>
    <center>
        <div id="divFrom" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
            <div class="container">
              <br>
                <center>
                    <h1>Register</h1>
                </center>
                <hr>
                <form @submit="onSubmit">
                    <div class="row">
                        <label for="inputfname"><b>Username:</b></label>
                        <input type="text" class="form-control" id="inputfname" v-model="form.username" required placeholder="Username">
                    </div><br>
                    <div class="row"><br>
                        <label for="email"><b>Email:</b></label>
                        <input type="email" class="form-control" id="inputEmail4" v-model="form.email" required placeholder="Email">
                    </div><br>
                    <div class="row">
                        <label for="password"><b>Password:</b></label>
                        <input type="password" class="form-control" id="password" v-model="form.password" required placeholder="Password">
                    </div><br>
                    <div class="row">
                        <label for="confirmPassword"><b>Confirm Password:</b></label>
                        <input type="password" class="form-control" id="confirmPassword" v-model="form.confirmPassword" required placeholder="Confirm Password">
                        <span></span><br><br><br>
                    </div>
                    <button id="login" type="submit" class="btn btn-primary btn-lg" style="text-align:center;">Register</button><br><br>
                </form>
            </div>
        </div>
    </center>
</template>




<script>
import AUTH from 'services/auth'
// import ROUTER from 'router'
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      sessionStorage.setItem("Password", this.form.password)
      sessionStorage.setItem("Username", this.form.username)
      sessionStorage.setItem("Email", this.form.email)
      AUTH.register(this.form.username, this.form.password)
      //ROUTER.push('/login')
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/colors.scss";
#top{
  background-color: $bckg_color !important;
	padding: 3vw 4vw 5vw;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);
  text-align: center;
  margin-top: 60px;
}
/* #login {length: 20px; } */

</style>