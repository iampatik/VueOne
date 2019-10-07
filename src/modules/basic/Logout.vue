<template>
     <div id="background" style="padding-top:90px;">
        <center>
             <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
                 <form class="container" @submit="onSubmit">
                   <br>
                     <center>
                         <h1>Logout?</h1>
                     </center>
                     <hr>
                     <div class="row">
                            <button class="btn btn-primary" @click="logout" >Yes</button>
                            <button class="btn btn-primary" @click="dashboard" >No</button>
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
import ROUTER from 'router'

export default {
    name: "logout",
    methods: {
        logout() {
            AUTH.logout()
        },
        dashboard() {
            ROUTER.push('/dashboard')
        }
    }


}


 
 </script>