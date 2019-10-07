<template>
    <div >
        <div id="parts" v-if="auth.user!==null">
            <Sidebar id="nav"></Sidebar>
            <transition>
                <router-view></router-view>
            </transition>
        </div>
        <div v-else>
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style scoped>
#nav {
    height: 96%;
    margin-top: 56px;
}

</style>

<script>

import Sidebar from './sidebar.vue';
import AUTH from 'services/auth';

export default{
    name: "parts",

    components: {
        Sidebar
    },
    data(){
        return{
            auth: AUTH
        }
    }
    
};
</script>
