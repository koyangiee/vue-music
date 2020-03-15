<template>
    <div class="nav">
        <div class="menu-button">
            <font-awesome-icon icon="bars" @click="show = !show"/>
            <van-popup v-model="show" @click="show = !show" position="left" :style="{width: '63%', height: '100%'}">
                <div class="profile">
                    <div class="login-container">
                        <div v-if="isLogin">
                            <img :src="profile.avatarUrl" alt="" class="avatar">
                            <div class="nickname-logout">
                                <div class="nickname">{{ profile.nickname }}</div>
                                <div class="logout" @click="logout">
                                    <font-awesome-icon icon="power-off"/> 退出
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p>登录网易云音乐</p>
                            <p>手机电脑多端同步，尽享海量音乐</p>
                            <router-link to="/login" class="login-btn">立即登录</router-link>
                        </div>
                        
                    </div>
                    <div class="line"></div>
                </div>
                
            </van-popup>
        </div>
        <div class="nav-menu">
            <router-link class="nav-link" to="/my">
                我的
            </router-link>
            <router-link class="nav-link" to="/detect">
                发现
            </router-link>
            <router-link class="nav-link" to="">
                云村
            </router-link>
            <router-link class="nav-link" to="">
                视频
            </router-link>
        </div>
        <div class="search"></div>
        
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return {
            show: false,
        }
    },
    computed: {
        ...mapGetters(['isLogin', 'profile'])
    },
    methods: {
        ...mapMutations(['login']),
        logout(){
            sessionStorage.removeItem("islogin")
            sessionStorage.setItem("profile", '{}')
        }
    }
}
</script>

<style lang="less">
    .nav{
        margin-top: 15px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

        .nav-menu{
            width: 60%;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            .nav-link{
                color: #636363;
            }
        }
        

        .menu-button{
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .search{
            width: 20%
        }

        .profile{
            padding: 25px 10px 10px;

            .line{
                border-bottom: 1px solid #eee;
                margin: 20px 0px;
            }

            .login-container{
                color: #ccc;
                text-align: center;
                font-size: 12px;

                p{
                    margin: 5px 0px;
                }

                .login-btn{
                    margin-top: 5px;
                    display: inline-block;
                    padding: 5px 5px;
                    border: 1px solid #ccc;
                    color: #ccc;
                    border-radius: 15px;
                    font-size: 12px;
                    width: 100px;
                }

                .avatar{
                    width: 60px;
                    border-radius: 50%;
                }

                .nickname-logout{
                    display: flex;
                    justify-content: space-between;

                    .nickname{
                        color: #000;
                        font-size: 14px;

                        .level{
                            display: inline-block;
                            width: 40px;
                            background-color: #eee;
                            color: #ccc;
                            border-radius: 10px;
                            font-size: 12px;
                        }
                    }

                    .logout{
                        color: #c20c0c;
                    }
                }
            }
        }
    }
</style>