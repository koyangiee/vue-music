<template>
    <div class="bg">
        <h1>云音乐</h1>
        <div class="login">
            <van-form @submit="login">
                <div class="form-control">
                    <input class="form-input" id="username" v-model="username" type="text" placeholder="邮箱 or 手机号" />
                </div>
                 <div class="form-control">
                    <input class="form-input" id="password" v-model="password" type="password" placeholder="密码" />
                </div>
                <div class="login-btn">
                    <van-button round block color="#c20c0c" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            var emailReg = /^.+@163.com$/
            var cellphoneReg = /^1[3456789]\d{9}$/
            if(this.username == ''){
                this.$toast('请填写账号')
                return false
            }
            if(!emailReg.test(this.username) && !(/^\d+$/.test(this.username))){
                this.$toast('非网易邮箱')
                return false
            }else if(!cellphoneReg.test(this.username) && /^\d+$/.test(this.username)){
                this.$toast('手机号格式错误')
                return false
            }else{
                if(cellphoneReg.test(this.username)){
                    this.$store.dispatch('cellphoneLogin', {phone: this.username, password: this.password}).then((res) => {
                        this.$toast(res.msg)
                    })
                }else{
                    this.$store.dispatch('emailLogin', {email: this.username, password: this.password}).then((res) => {
                        this.$toast(res.msg)
                    })
                }
            }
        }
    }
}
</script>

<style lang="less">
    .bg{
        height: 100%;
        width: 100%;
        background-color: #c20c0c;
        position: fixed;

        h1{
            color: #fff;
            font-size: 30px;
            text-align: center;
            margin-top: 45%;
        }

        .login{
            width: 80%;
            margin: 50px auto;

            .form-control{
                display: flex;
                justify-content: space-between;
                flex-flow: row;
                color: #fff;
                font-size: 18px;
                margin: 20px 0px;

                .label{
                    width: 30%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                }

                .form-input{
                    width: 100%;
                    outline: none;
                    border-top: none;
                    border-right: none;
                    border-bottom: 1px solid #fff;
                    border-left: none;
                    background-color: #c20c0c;
                }

                &>input::-webkit-input-placeholder{
                    color: #fff;
                }
            }

            .login-btn{
                border: 1px solid #fff;
                border-radius: 30px;
                margin-top: 20px;
            }

        }
    }
</style>