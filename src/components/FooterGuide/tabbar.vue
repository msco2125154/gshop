<template>
    <nav>
        <ul>
                <router-link to="/order" tag="li" activeClass="my"><div><i class="iconfont iconshangcheng3"></i></div><div>order</div></router-link>
                <router-link to="/search" tag="li" activeClass="my"><div><i class="iconfont iconshangcheng"></i></div><div>search</div></router-link>
                <router-link to="/profile" tag="li" activeClass="my"><div><i class="iconfont iconintegral"></i></div><div>progile</div></router-link>
                <router-link to="/msite" tag="li" activeClass="my"><div><i class="iconfont iconMBEfenggechangyongtubiao-shangcheng"></i></div><div>msite</div></router-link>
        </ul>
    </nav>
</template>
<style lang="stylus" scoped>
@import '../../assets/stylus/common.styl'
nav
    clear: both;
    width:100%;
    overflow hidden
    ul
       display:flex;
       padding: 5px 0;
       position: fixed;
       bottom:0px;
       left:0px;
       width:100%;
       text-align center;
       background:#fff;
       z-index:111;
       border-top:2px solid #02a774;       
       li{
          flex:1;
          align-items: center; 
          justify-content: center;
          overflow hidden
          font-size 14px;
          div{
            i {
               font-size 22px;
            }
          }
       }
  

.my{
    color:#f00
}
</style>
