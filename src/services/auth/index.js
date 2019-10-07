import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    currentLogged: [],
    courses: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return this.user = user;
    },
    register(username, password) {
        this.registeredUser.push({
            username: username,
            password: password
        })

        // var p = JSON.parse(JSON.stringify(this.registeredUser))
        // alert (p)
        // console.log(p)
        ROUTER.push('/login')
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                this.currentLogged = this.registeredUser[i]
                return this.registeredUser[i]
            } else {
                alert("Email or Password is incorrect!")
            }
        }
        return null
    },
    logout() {
        this.user = null
        sessionStorage.getItem("Username",null)
        ROUTER.push('/login')
    },
    addCourse(course, year) {
        this.courses.push({
            course: course,
            year: year,
        });
            var p = JSON.parse(JSON.stringify(this.courses))
            
    },
    getCourse(course) {
        for (let i = 0; i < this.courses.length - 1; i++) {
            var p = JSON.parse(JSON.stringify(this.courses[i]))
            return course = i
            ;
        }

    },
    editProfile() {
        ROUTER.push('/edit')
    },
    save(username,email,password){
        for(var i = 0; i<this.registeredUser.length;i++){
            if(this.registeredUser[i].username === this.currentLogged.username){
                this.registeredUser[i].username = username
                this.registeredUser[i].email = email
                this.registeredUser[i].password = password
                this.currentLogged.username = username
                this.currentLogged.email = email
                this.currentLogged.password = password
            }
        }
        ROUTER.push('/personalinformation');
    },
    onsubmit(){
        this.user = null;
        ROUTER.push('/update');
        
    }
}