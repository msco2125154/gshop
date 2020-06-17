<template>
    <div class="test">
       <span v-if="!item.del">{{item.title}}</span>
       <span v-else style="color:#f00">{{item.title}}</span>
       <span v-show="!item.del">{{item.title}}</span>
       <a href=""></a>
    </div>
</template>
<script>
import '../assets/stylus/common.styl'
export default {
    data(){
        return{
            item:{
                title:'kec',
                del:false
            }
        }
    }
}
</script>

<style lang="stylus">
$green=#02a774;
$yellow=#F5A100;
$bc=#e4e4e4;
.test
    border-bottom:1px solid $yellow
    span
      color:$green;
    


     

</style>