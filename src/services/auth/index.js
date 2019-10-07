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
        var count = 0;
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                this.currentLogged = this.registeredUser[i]
                return this.registeredUser[i]
            } else {
                count++
                
            }
        }
        if(count == this.registeredUser.length){
            alert("Email or Password is incorrect!")
        }
        return null
    },
    logout() {
        this.user = null
        // sessionStorage.setItem("Username",null)
        // sessionStorage.setItem("Password",null)
        // sessionStorage.setItem("Email",null)
        sessionStorage.clear()
        ROUTER.push('/login')
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