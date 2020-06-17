<template>
   <header >
           <div class="header-box">
              <slot name="left"></slot>
              <span class="header_title ellipsis">
                  <span class="header_title_text">{{title}}</span>
              </span>
              <slot name="right"></slot>
           </div>

       </header>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style lang="stylus" scoped>
header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    color:#fff;
    text-align: center;
    .header-box{
        position :relative;
        line-height:45px
   .header_search{
        position :absolute;
        left:15px;
        color: #fff;
        width:10%;
       .iconfont{
         font-size: 30px;
       }
   }          
   .header_title{
       position :absolute;
       width:50%;
       left:50%;
       margin-left:-25%;
       .header_title_text{
           font-size 22px;

       }
   }
       
   .header_login{
    position: absolute;
    right:15px;
    font-size: 14px;
    color: #fff;

       .header_login_text{

       }
   }
    }
       
}
</style>