<template>
    <div>
        <h2>加减法计算器</h2>
        <div>
            <input type="button" value="-" @click="minHandle">
                <span>{{num}}</span>
            <input type="button" value="+" @click="addHandle">
        </div>
    </div>
</template>

<script>
    export default{
        // data(){
        //     return{
        //         // num:100
        //         num:this.$score.state.num
        //     }
        // },
        computed:{
            num(){     
                return this.$store.state.num         
            }
        },
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
