import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        num:100
    },
    mutations:{
        AddIncrement(state){
            // 函数接收一个参数state 这个state就是上面的state
            state.num += 5;
        },
        MinIncrement(state){
            // 函数接收一个参数state 这个state就是上面的state
            state.num -= 5;
        }
    }
})

export default store