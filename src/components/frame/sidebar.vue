<template>
    <div>
        <sidebar-menu id="sidebar" :src="require('assets/user.png')" :menu="menu" />
    </div>
</template>
<style scoped>
    #sidebar{
        height: 93%;
        margin-top: 56px;
    }
</style>
 
 <script>
 import AUTH from 'services/auth'
    export default {
        data() {
            return {
                auth: AUTH,
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true,
                    
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/personalinformation',
                        title: 'Personal Information',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/courses',
                        title: 'Add Course & Subject',
                        icon: 'fa fa-book',
                        // child: [
                        //     {
                        //         href: '/charts/sublink',
                        //         title: 'Edit'
                        //     }
                        // ]
                    },
                    {
                        href: '/logout',
                        title: 'Log Out',
                        icon: 'fa fa-user',
                        //methods: AUTH.logout()
                    
                    }
                ]
            }
        },
        methods:{
            // onToggleCollapse(collapsed) {},
            // onItemClick(event, item) {}
        }
    }
</script> 
   