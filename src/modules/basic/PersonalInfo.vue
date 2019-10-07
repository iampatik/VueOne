<template>
    <div class="container col-sm-3 my-sm-5 border rounded">
      <center>
        <div >
          <br>        
            <b-card-img :src="require('assets/user.png')" class="rounded-0" id="userIcon"></b-card-img>
          <hr>
        </div>
      </center>
      <div >
        <div>
          <div>
            <label id="h4"><b><h4>Name:</h4></b></label>
            <b><h4 class="border rounded">{{Uname}}</h4></b><br>
          </div>
          <div>
            <b><h4><label id="h4">Email:</label></h4><h4 class="border rounded">{{Email}}</h4></b><br>
          </div>
          <div>
            <label id="h4"><b><h4>Password:</h4></b></label>&nbsp;<b><h4 class="border rounded">******</h4></b><br>
          </div>
        </div>
      <hr>
      <center>
        <button @click="onSubmit" class="btn btn-primary" id="editBtn">Edit Profile</button><br><br>
      </center>
      </div>
    </div>
</template>


<style>
#userIcon {
  width: 200px;
  height: 200px;
}

#h4{
  text-align: left;

}

</style>


<script>
// import ROUTER from 'router'
import AUTH from 'services/auth'
import ROUTER from 'router'
export default {
  data() {
    return {
      auth: AUTH,
      Uname: sessionStorage.getItem("Username"),
      Email: sessionStorage.getItem("Email"),
      Pass: sessionStorage.getItem("Password")
    };
  },
  methods:{
    onSubmit(e){
      e.preventDefault()
      ROUTER.push('/update')
    }
  }
};
</script>

