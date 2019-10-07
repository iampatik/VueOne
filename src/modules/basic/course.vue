<template>
  <div class="container">
    <div class="row">
      <div id="divFrom" class="col-sm-5 my-sm-5 col-md-5 border rounded" style="margin-left:0.5%">
        <div class="container">
          <br>
          <center>
              <h1>Add Subject</h1>
          </center>
          <hr>
          <form>
            <div >
              <label id="Subject"><b>Subject:</b></label>
              <input type="text" class="form-control" required placeholder="Enter Subject" v-model="infos.subject" id="subject" />
            </div><br>
            <div >
              <labeL id="teacher"><b>Teacher:</b></label>
              <input type="text" class="form-control" required placeholder="Enter Teacher" v-model="infos.teacher" id="teacher" />
            </div><br>
            <div >
              <label id="time"><b>Time:</b></label>
              <input type="text" class="form-control" required placeholder="Enter Time" v-model="infos.time" id="time" /><br>
            </div><br>
            <div >
              <label id="time"><b>Day:</b></label>
              <input v-model="infos.day" id="day" required placeholder="Enter Day" type="text" class="form-control"/>
            </div><br>
            <div><br>
              <label id="room"><b>Room:</b></label>
              <input v-model="infos.room" id="room" required placeholder="Enter Room" type="text" class="form-control"/>
              <span></span><br><br><br>
            </div>
            <button class="btn btn-primary btn-lg" @click="addItem">Add Subject</button><br><br>
          </form>
        </div>
      </div>
      <div class="col-sm-6 my-sm-5 col-md-6 border rounder" stacked style="margin-left:20px;overflow:auto">
        <div class="container">
          <div>
          <!-- <b-card  id="card1"  style="max-width: 60rem;overflow:auto;"> -->
            <table class= "table table-hovered" stacked>
              <thead>
                <tr>
                <th>SUBJECT</th>
                <th>TEACHER</th>
                <th>TIME</th>
                <th>DAY</th>
                <th>ROOM</th>
                <th>ACTION</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in this.rows" :key="index">
                <tr >
                <td>{{ item.subject }}</td>
                <td>{{ item.teacher }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.day }}</td>
                <td>{{ item.room }}</td>
                <td><button class="btn btn-primary" @click="remove">Remove</button></td>

                </tr>
              </tbody>
            </table>
          <!-- </b-card> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
#card {
margin-top: 20px;
}
.jumbotron {
padding: 20px;
text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      rows:[],
      infos: {
      subject: "",
      teacher: "",
      time: "",
      day: "",
      room: "",
    },
    delInfo: {
      delCourse: ""
    }
  }
  },
  methods: {
    addItem() {
      var object = {
      subject: this.infos.subject,
      teacher: this.infos.teacher,
      time: this.infos.time,
      day: this.infos.day,
      room: this.infos.room
      };
      if( this.infos.subject === "" || this.infos.teacher === "" || this.infos.time === "" || this.infos.day === "" || this.infos.room === ""){
        alert("Please Provide Inputs!!");
      }else{
      this.rows.push( object )
      this.infos.subject = ""
      this.infos.teacher = ""
      this.infos.time = ""
      this.infos.day= ""
      this.infos.room = ""
      }
    },
    remove(){
      var object = {
      subject: this.infos.subject,
      teacher: this.infos.teacher,
      time: this.infos.time,
      day: this.infos.day,
      room: this.infos.room
    };
    this.rows.splice(object,1)
        }
      }
};
</script>  