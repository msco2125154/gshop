<template>
    <div>

       <HeaderTop title="HeaderTopHeaderTopHeaderTop">
             <span class="header_search" slot="left">
                  <i class="iconfont iconsousuo"></i>
              </span>            
              <span class="header_login" slot="right">
                  <span class="header_login_text">
                   登录|注册
                  </span>               
              </span>
       </HeaderTop>    
       <nav class="msite-nav">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/1.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/2.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/3.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/4.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/5.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/6.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/13.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/14.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                   </div>
                   <div class="swiper-slide">
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/7.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/8.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/9.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/10.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/11.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/12.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/13.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                       <a href="" class="link_to_food">
                           <div class="food_container">
                               <img src="./image/nav/14.jpg" alt="">
                           </div>
                           <span>超市食物</span>
                       </a>
                   </div>
               </div>
               <div class="swiper-pagination"></div>  
            </div>
       </nav>
       <div class="msite-shoplist">
           <div class="shop-header">
               <i class="iconfont iconshangchengda"></i>
               <span class="shop_header_title">附近商家</span>  
           </div>
           <shoplist></shoplist>
       </div>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import shoplist from '../../components/shoplist/shoplist'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    components:{
        HeaderTop,
        shoplist
    },
   mounted(){
     new Swiper ('.swiper-container', {
       loop: true, 
       autoplay:true,
       pagination: {
       el: '.swiper-pagination'
       }    
     })  
    }

}
</script>
<style lang="stylus" scoped>
.msite-nav{
    margin-top :45px;
    position :relative;
    height:200px;
    background:#fff
    .swiper-wrapper{
        height:200px;
    .swiper-slide {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       .link_to_food{
          width:25%;
          text-align :center;
          .food_container{  
              padding-bottom:10px;            
               img{
                  width:50px;
               } 
            }
            span{
                   color:#666;
                   font-size :13px;                   
            }        
         
       }
    }
    }
}
.msite-shoplist{
    margin-top :10px;
    padding:3%
    background:#fff;
    .shop-header{
        display:flex;
        align-items :center;
        line-height 30px;
        .iconfont {}
        .shop_header_title{
            margin-left :5px;
            color: #999;
            font-size: 14px;
        }
    }

}
   
</style>