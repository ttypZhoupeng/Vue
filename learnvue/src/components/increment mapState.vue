<template>
    <div>
        <h2>加减法计算器</h2>
        <div>
            <input type="button" value="-" @click="minHandle">
                <span>{{num}}</span>
            <input type="button" value="+" @click="addHandle">
        </div>
        <div>
            <p>姓名：{{name}}</p>
            <p>年龄：{{age}}</p>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        // data(){
        //     return{
        //         // num:100
        //         num:this.$score.state.num
        //     }
        // },

        // 赋值方法一
        // computed:{
        //     num(){     
        //         return this.$store.state.num         
        //     }
        // },
        // 方法一传递多个参数
        // computed:{
        //     num(){
        //         return this.$store.state.num
        //     },
        //     name(){
        //         return this.$store.state.name
        //     },
        //     age(){
        //         return this.$store.state.age
        //     }
        // },

        // 赋值方法二
        // computed:mapState({
        //     num:state=>state.num,
        //     name:state=>state.name,
        //     age:state=>state.age
        // }),

        // 赋值方法三 最方便最长用的方法
        computed:mapState(["num","name","age"]),

        methods:{
            minHandle(){
                // this.num -= 5;
                this.$store.commit('MinIncrement');
            },
            addHandle(){
                // console.log(this.$store.state.num);
                // this.num += 5;
                // 通过这里提交一个mutations,commit
                this.$store.commit('AddIncrement');
            }
        }
    }
</script>
