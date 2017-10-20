import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        num:100,
        name:'zhoupeng',
        age:'22',
        num2:this.num
    },
    getters:{
        count: state => {
            return state.num > 130 ? 130 : state.num;
        }
    },
    mutations:{
        AddIncrement(state){
            // 函数接收一个参数state 这个state就是上面的state
            state.num += 5;

            // console.log(paylode);
            // state.num += paylode.num
        },
        MinIncrement(state){
            // 函数接收一个参数state 这个state就是上面的state
            state.num -= 5;
        }
    },
    actions:{
        addActoin(context){
            console.log(context);
            setTimeout(() => {
                context.commit('AddIncrement',{num})
            },1000)
            context.dispatch('textAction');
        },
        textAcrion(){
            console.log('textAction触发了')
        }
        
    }
})

export default store