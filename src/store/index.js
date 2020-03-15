import Vue from 'vue'
import Vuex from 'vuex'
import {reqEmailLogin, reqCellphoneLogin} from '@/api'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        isLogin: sessionStorage.getItem('islogin'),
        profile: JSON.parse(sessionStorage.getItem('profile'))
    },
    getters: {
        isLogin: (state) => state.isLogin,
        profile: (state) => state.profile
    },
    mutations: {
        IS_LOGIN(state){
            state.isLogin = sessionStorage.getItem('islogin')
        },
        PROFILE(state){
            state.profile = JSON.parse(sessionStorage.getItem('profile'))
        }
    },
    actions: {
        emailLogin({commit}, params){
            return new Promise((resolve) => {
                reqEmailLogin(params).then(res => {
                    if(res.code == 200){
                        sessionStorage.setItem('islogin', true)
                        sessionStorage.setItem('profile', JSON.stringify(res.profile || '{}' ))
                        commit('IS_LOGIN')
                        commit('PROFILE')
                    }else{
                        resolve(res)
                    }
                })
            })
        },
        cellphoneLogin({commit}, params){
            return new Promise((resolve) => {
                reqCellphoneLogin(params).then(res => {
                    if(res.code == 200){
                        sessionStorage.setItem('islogin', true)
                        sessionStorage.setItem('profile', JSON.stringify(res.profile || '{}' ))
                        commit('IS_LOGIN')
                        commit('PROFILE')
                    }else{
                        resolve(res)
                    }
                })
            })
        },
    }
})

export default store