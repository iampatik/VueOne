<template>
    <center>
        <div id="divFrom" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
            <div class="container">
              <br>
                <center>
                    <h1>Update Profile</h1>
                </center>
                <hr>
                <form>
                    <div class="row">
                        <label for="inputfname"><b>Username:</b></label>
                        <input type="text" class="form-control" id="inputfname" v-model="username" required placeholder="Username">
                    </div><br>
                    <div class="row"><br>
                        <label for="email"><b>Email:</b></label>
                        <input type="email" class="form-control" id="inputEmail4" v-model="email" required placeholder="Email">
                    </div><br>
                    <div  class="row">
                        <label for="password"><b>Password:</b></label>
                        <input type="password" class="form-control" id="password" v-model="password" required placeholder="Password">
                    </div>
                    <br>
                    <button id="login" type="submit" class="btn btn-primary btn-lg" @click="save" style="text-align:center;">Update</button><br><br>
                </form>
            </div>
        </div>
    </center>
</template>

<script>
import ROUTER from "router";
import AUTH from "services/auth";
export default {
  data() {
    AUTH;
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      if(this.username==null || this.email == null || this.password==null){
        alert("Please complete the filled up form!");

      }
      else{
        sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),
        AUTH.save(this.username, this.email, this.password);
      }
      
    }
  }
};
</script>
