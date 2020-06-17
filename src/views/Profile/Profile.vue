<template>
   <div>
      <HeaderTop title="个人主页"></HeaderTop>
      <div class="profile">
          <router-link to="/login" class="profile-header">
              <div class="profile-header-left">
                  <i class="iconfont iconportrait"></i>
              </div>
              <div class="profile-header-center">
                  <p class="profile-header-title">登录/注册</p>
                  <p class="profile-header-phone">
                      <i class="iconfont iconPhoneMoney"></i>
                      <span>暂无绑定手机号</span>
                  </p>
              </div>
              <div class="profile-header-right">
                  <i class="iconfont iconarr-right"></i>
              </div>
          </router-link>
          <div class="profile-info">
              <ul>
                  <li class="profile-info-balance">
                      <p class="balance-number">
                          <span>0.00</span>元
                      </p> 
                      <p class="profile-info-title">我的余额</p> 
                  </li>
                  <li class="profile-info-discount">
                      <p class="discount-number">
                          <span>0</span>个
                      </p> 
                      <p class="profile-info-title">我的优惠</p> 
                  </li>
                  <li class="profile-info-integral">
                      <p class="integral-number">
                          <span>0</span>分
                      </p> 
                      <p class="profile-info-title">我的积分</p> 
                  </li>
              </ul>
          </div>
          <div class="profile-list">
              <ul>
                  <li>
                      <a href="">
                          <i class="iconfont icondingdan"></i>
                          <span>我的订单</span>
                          <div class="profile-list-right">
                              <i class="iconfont iconarr-right"></i>
                          </div>
                      </a>
                   </li>
                   <li>
                      <a href="">
                          <i class="iconfont iconjifen"></i>
                          <span>积分商城</span>
                          <div class="profile-list-right">
                              <i class="iconfont iconarr-right"></i>
                          </div>
                      </a>
                   </li>
                   <li>
                      <a href="">
                          <i class="iconfont iconVIP"></i>
                          <span>硅谷外卖会员</span>
                          <div class="profile-list-right">
                              <i class="iconfont iconarr-right"></i>
                          </div>
                      </a>
                   </li>
              </ul>
          </div>
          <div class="profile-serve">
              <i class="iconfont iconfuwuzhongxin"></i>
              <span>服务中心</span>
              <div class="profile-list-right">
                     <i class="iconfont iconarr-right"></i>
                </div>
          </div>
      </div>
   </div>
    
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
    components:{
        HeaderTop
    }
}
</script>
<style lang="stylus" scoped>
    .profile{
        margin-top: 46px;        
        .profile-header{
            display block;
            background:#02a774;
            padding:3%;
            overflow: hidden;
            .profile-header-left{
                float left;
                .iconfont{
                    background:#7e8c8d;
                    font-size:60px;
                    border-radius 25px;
                    color:#e4e4e4
                }
            }
            .profile-header-center{
                float left;
                margin-left:5px;
                .profile-header-title{
                    margin-top: 8px;
                    margin-bottom: 15px;
                    color:#fff;
                    font-size :18px;
                    font-weight bold
                }
                .profile-header-phone{
                    .iconfont{
                        color #fff;
                    }
                    span{
                        font-size:14px;
                        color #fff;
                        }
                }
              
            }
            .profile-header-right{
                float:right;
                line-height: 60px;
                .iconfont{
                    color #fff;
                }

            }
        }
        .profile-info{
            background #fff;
            text-align:center;
            ul{
                display flex;
                align-items:center;
                justify-content: center;
                li{
                    flex:1
                    border-right 1px solid #eee;
                    font-size: 14px;
                    color: #333;
                    padding: 15px 5px 10px;
                    &.profile-info-balance{
                        color #999;
                        .balance-number{
                            margin-bottom 15px;    color: #666;
                            span{
                                color #f90;
                                font-size:30px;
                                line-height 30px;
                                font-weight bold;
                            }
                        }
                        .profile-info-title{
                            color #666;
                        }
                    }
                    &.profile-info-discount{                        
                        color #999;
                        .discount-number{
                            margin-bottom 15px;    color: #666;
                            span{
                                color:#ff5f3e;
                                font-size:30px;
                                line-height 30px;
                                font-weight bold;
                            }
                        }
                        .profile-info-title{
                            color #666;
                        }
                    }
                    &.profile-info-integral{
                        color #999;
                        .integral-number{
                            margin-bottom 15px;    color: #666;
                            span{
                                color #6ac20b;
                                font-size:30px;
                                line-height 30px;
                                font-weight bold;
                            }
                        }
                        .profile-info-title{
                            color #666;
                        }
                    }
                }
            }
        }
        .profile-list{
            margin-top 10px;
            background #fff;
            ul{
                li{
                    padding:18px 0 18px 18px;
                    border-bottom:1px solid #f5f5f5;
                   a{
                       .iconfont{
                           font-size 20px;
                       }
                       .icondingdan{
                           color #48c09b 
                       }
                       .iconjifen{
                           color #ff5f3e
                       }
                       .iconVIP{
                           color #ff9a02
                       }
                       span{
                           font-size 18px;
                           color #333
                       }
                       .profile-list-right{
                           float right;
                           .iconfont{
                               color #eee
                           }
                       }
                   } 
                }
            }
        }
        .profile-serve{
            margin-top 10px;
            background #fff;
             padding:18px 0 18px 18px;
            .iconfuwuzhongxin{
                color #31b78e;
                font-size 20px;
            }
            span{ 
                color #999
            }
            .profile-list-right{
                float right ;
                .iconfont{
                    color #eee;
                    font-size 20px;
                }
            }
        }
    }
</style>