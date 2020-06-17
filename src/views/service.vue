<template>
    <div>
        <nav>
             detail--{{myid}}
            <ul>
                <router-link to="/service/raiders" tag="li">comingsoon</router-link>
                <router-view></router-view>  
                <router-link to="/service/punchIn" tag="li">nowplaying</router-link>
                <router-view></router-view>  
                <router-link to="/service/raiders" tag="li">comingsoon</router-link>
                <router-view></router-view>  
                <router-link to="/service/punchIn" tag="li">nowplaying</router-link>
                <router-view></router-view>  
                <router-link to="/service/raiders" tag="li">comingsoon</router-link>
                <router-view></router-view>  
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
       props:['myid'],//接收
}
</script>