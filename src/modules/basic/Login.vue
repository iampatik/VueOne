<template>
     <div id="background" style="padding-top:90px;">
        <center>
             <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
                 <form class="container" @submit="onSubmit">
                   <br>
                     <center>
                         <h1>Login</h1>
                     </center>
                     <hr>
                     <div class="row">
                         <label for="loginUserName"><b>Username:</b></label>
                         <input type="text" v-model="form.username" class="form-control" id="loginUserName" placeholder="Enter Username" ><br>
                     </div><br>
                     <div class="row">
                         <label for="loginPassword"><b>Password:</b></label>
                         <input type="password" v-model="form.password" class="form-control" id="loginPassword" placeholder="Enter Password" >
                     </div><br>
                     <button id="login" class="btn btn-primary btn-lg" type="submit">Login</button>
                     <br>
                     <br>
                 </form>
             </div>
         </center>
     </div>
 </template>


<script>
import AUTH from 'services/auth'
//import jquery from 'jquery'
import ROUTER from 'router'
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        username: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      let user = AUTH.login(this.form.username,this.form.password);
      AUTH.setUser(user);
      if(user!==null){
        ROUTER.push('/dashboard')
      }
      AUTH.login(this.form.username, this.form.password)
    }
    // ,
    // login(){
    //   let link= 'http://localhost:3000/user'
    //   jquery.ajax({
    //       url: link,
    //       method: 'POST',
    //       headers: {
    //         'Access-Control-Allow-Origin': '*'
    //       }
    //   })
      // jquery.get('http://localhost:3000').then(response => {
      //   alert(response)
      // })
    //}
  }
};
</script>