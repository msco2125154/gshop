<template>

  <div id="app">
    <HeaderTop title="订单列表"></HeaderTop>
  
    <div class="container">
     <h2>订单填写</h2>
     <div class="header">
        <div class="img">
           <img src="../../assets/img/2.jpg" alt="">
        </div>
        <div class="right">
          <p class="roomName">{{looplist.roomName}}</p>
          <p class="roomInfo">
            <span>{{looplist.square}}平米</span> |
            <span>{{looplist.window}}</span> |
            <span>{{looplist.bed}}</span>
          </p>
        </div>
     </div>
    <div class="time">      
        <div class="begintime"><span>入住</span><p>{{looplist.beginTime}}日</p></div> 
        <span class="housetime">{{looplist.houseTimes}}晚</span>
        <div class="endTime"><span>离店</span><p>{{looplist.endTime}}日</p></div> 
    </div>
    <div class="number-box">
        <div class="room-num">
            <div class="room">房间数量</div>
            <div class="num">
              <span class="numBox">
                  <i class="icon iconfont iconjianhao1"  @click="btnMinute1" :class="{ active1: isActive1 }"></i>
                  <input  v-model="looplist.roomNumber" >
                <i class="icon iconfont iconjiahao" @click="btnAdd1"></i>
              </span>

            </div>
        </div>
        <div class="people-num">
            <div class="room">入住人数</div>
            <div class="num">
              <span class="numBox">
                  <i class="icon iconfont iconjianhao1"  @click="btnMinute2"  :class="{ active: isActive }"></i>
                  <input v-model="looplist.personNumber" >
                  <i class="icon iconfont iconjiahao" @click="btnAdd2"></i>
              </span>

            </div>
        </div>       
        
        <div class="name">
          <div class="ru">入住人</div>
          <div class="add" @click="showPopup"><span>添加</span></div>
        </div>
        <popup
             v-show="isPopupVisible"
             >
         </popup>
         <ul class="namelist" v-for="name in namelist" :key="name">
            <li>{{name}}</li>
        </ul>
    </div>

    <div class="phone">
      <div class="phone-in">手机号</div>
      <div class="phone-num">
        <input type="text" placeholder="|用于接收短信及方便商家联系">
      </div>
    </div>
    <div class="info">
      <p>
        <span class="tit">
          积分赠送
        </span>
        <span class="con">
          付款成功后，可获得积分，积分可抵现金使用
        </span>
      </p>
      <p>
        <span class="tit">
          退订规则
        </span>
        <span class="con">
          具体规则待定
        </span>
      </p>
      <p>
        <span class="tit">
          预订须知
        </span>
        <span class="con">
          付款后需等待房东确认是否有房，建议提前联系房东确认，预定成功，会以短信形式通知
        </span>
      </p>                 
    </div>  
    <div class="count">
      <div class="pay">
          <span class="pay-in">支付</span><span class="pay-num">￥{{looplist.personNumber*looplist.roomNumber*200}}</span>
      </div>
      <div class="m">订单明细<i class="icon iconfont iconxiangshang"></i></div>
      <div class="go"><span>去支付</span></div>
    </div>   
    </div>
  </div>
</template>
<script>
import popup from '../../components/popup'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import bus from '@/bus'
export default {
  name: 'App',
  data(){
    return {
    looplist:
      {
            "roomName":"温馨民宿双人房",
            "square":"20",
            "window":"有窗",
            "bed":"双人床",
            "beginTime":"02-20",
            "endTime":"02-22",
            "houseTimes":"2",
            "roomNumber":2,
            "personNumber":2,
            "name":["张三","张三"],
            "houseType":"温馨民宿双床房",
            "amount":"208"
      },
     isActive:false,
     isActive1:false,
     isPopupVisible:false,
     namelist:[]
    }
},
 beforeMount(){
      bus.$on("pop",(data)=>{
          this.isPopupVisible=data
      })
      bus.$on("shuzu",(data)=>{
          this.namelist=data
      })
   },
components:{
  popup,
  HeaderTop
},
methods: {
  handleChangePage(m){
            console.log("eee",m);
            // this.$router.push('/service/' +myid)
            this.$router.push({name:'service',params:{myid:m}})
        },
　　btnAdd1() {　　　
      　　this.looplist.roomNumber++  ;
         this.isActive1=false  　　
　　},
　　btnMinute1() {
  　　if (this.looplist.roomNumber <=2) {
   　　 this.looplist.roomNumber=1;
       this.isActive1=true
  　　} else {
  　　  this.looplist.roomNumber--;
  this.isActive1=false       
  　　}
　　},
btnAdd2() {　　　
      　　this.looplist.personNumber++   ;
         this.isActive=false 　　
　　},
　　btnMinute2() {
  　　if (this.looplist.personNumber <=2) {
   　　 this.looplist.personNumber=1;
       this.isActive=true
  　　} else {
  　　  this.looplist.personNumber--; 
        this.isActive=false           
  　　}
　　},
 showPopup(){
      this.isPopupVisible = true
    }
}
}
</script>

<style lang="stylus" scoped>
.container{
  margin-top :50px;
}
.numBox .active{
  color:#eee;
}
.numBox .active1{
  color:#eee;
}
*{
  padding:0px;
  margin:0px;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
}
/* .container{
  padding:0 3%;
} */
h2{
  text-align: center;
  font-size: 18px;
}
.info{
  padding:2%;
  background:#eee;
  font-size: 14px;;
}
.info p{
  display:table;
  display: flex;
}
.info .tit{
flex:1;
color:#6e6e6e;
}
.info .con{
flex:4;
color:#a9a9a9;
}
.time{
  padding:3%;
  border-top:8px solid #eee;
  border-bottom:8px solid #eee;
  clear: both;
  overflow: hidden;
  display: flex;
align-items:center;
}
.time .begintime{
flex:1;
 text-align: left;
}
.time .endTime{
   text-align: right;
flex:1;
}
.time span{
  font-size: 12px;
}
.time .housetime{
flex:1;
 text-align: center;
}
.header{
  display:flex;
  padding:3%;
  align-items:center;
}
.header .img{
flex:1;
margin-right: 3%;
}
.header .img img{
  width:100%;
  border-radius: 15%;
}
.header .right{
flex:4;
}
.right .roomInfo{
  font-size: 12px;
  color:#bbb;
  line-height: 30px;
}
.number-box{
  padding:3%;
  border-bottom:8px solid #eee;
  overflow: hidden;
}
.room-num,.people-num{
  display:flex;
  border-bottom:1px solid #eee;
  padding: 3% 0;
}
.room-num .room,.people-num .room{
  flex:1
}
.room-num .num,.people-num .num{
  flex:1;
  text-align: right;
}
.iconfont {
    font-size: 20px;
    color: #006dfd;
}
.room-num .num span.numBox,.people-num .num span.numBox{
      margin-right: 3%;
      background: #f2f8ff;
      display: inline;
      position: relative;
}
.room-num .num input,.people-num .num input{
      width: 25%;
    display: inline-block;
    text-align: center;
    border:0;
    background: #f2f8ff;
}
.room-num .num span.numBox i,.people-num .num span.numBox i{
  position:absolute;top:-1px;
  z-index:2;
}
.room-num .num span.numBox i.iconjianhao1,.people-num .num span.numBox i.iconjianhao1{
 left:-11px
}
.room-num .num span.numBox i.iconjiahao,.people-num .num span.numBox i.iconjiahao{
right:-11px
}
.grey{
  color:#bbb;
}
.name{
display:flex;
padding: 3% 0;
}
.name .ru{
flex:1;
}
.name .add{
  flex:1; 
  text-align: right;
}
.name .add span{
padding: 2% 12%;
  text-align: right;
  background:red;
  color:#fff;
  border-radius: 15px;
      font-size: 14px;
}
.namelist li{
float:left;
margin-top: 5px;
margin-right: 10px;
border-radius: 15px;
border:1px solid #006dfd;
color: #006dfd;
padding:1% 3%;
font-size: 14px;
}
.phone{
  padding:3%;
  display:flex;
  align-items: center;
}
.phone .phone-in{
  flex:1;
  
}
.phone .phone-num{
  flex:3;
}
.phone .phone-num input{
  width:100%;
  text-align: center;
  background:#eee;
  border:0;
  padding:3% 0;
  border-radius: 15px;
}
.count{
  padding:3%;
  border-top:3px solid rgb(240, 237, 237);
  display: flex;
  align-items: center;
}
.count .pay{flex:1;}
.count .pay .pay-in{
  font-size: 12px;
  color:#ccc;
}
.count .pay .pay-num{
  font-size: 18px;
  color:rgb(250, 7, 7);
}
.count .m{flex:1;color:#ccc;font-size: 12px;text-align: center;}
.count .m i{
  color:#ccc;font-size: 12px;
}
.count .go{flex:1;text-align: right;}
.count .go span{
  padding: 7% 18%;
    text-align: right;
    background: red;
    color: #fff;
    border-radius: 15px;
    font-size: 16px;
}
</style>
