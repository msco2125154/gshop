<template>
    <div>
        
        <input type="text" ref="fill">
        <button @click="add">add</button>
        <ul class="namelist" v-for="name in namelist" :key="name">
            <li>{{name}}</li>
        </ul>
        <div class="sure" @click="closePopup">确定</div>
    </div>
</template>
<script>
import bus from '@/bus'
export default {
    data(){
        return{
            namelist:[],
            name1list:[]
        }
    },
 
    methods:{
        add(){
          this.namelist.push(this.$refs.fill.value)
        }   ,
        closePopup(){
            bus.$emit("pop",false);
            bus.$emit("shuzu",this.namelist);
        }
    }
}
</script>
<style lang="stylus" scoped>

.sure{
    clear: both;
}
</style>