<template>
    <div class="aa">
        <ul>
            <li>
                <div class="box" :class="{finish:flag>0}">First</div>
                <span>Personal details</span>
                <div class="line" :class="{orange:flag>0}"></div>
            </li>
            <li>
                <div class="box" :class="{finish:flag>1}">Second</div>
                <span>Additional Info</span>
                <div class="line" :class="{orange:flag>1}"></div>
            </li>
            <li>
                <div class="box" :class="{finish:flag>2}">Third</div>
                <span>Complete</span>
                <div class="line" :class="{orange:flag>2}"></div>
            </li>  
        </ul>
        <div class="arrow">
            <button class="btn btn-warning" @click="back()" v-show="flag>0">Back</button>
            <button class="btn btn-warning" @click="nextStep()" v-if="flag<3">Next</button>
            <button class="btn btn-warning" disabled="disabled" v-else>Finish</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                flag:0,
                movies:[],
            }
        },
        methods:{
            nextStep(){
                if (this.flag<3) {
                    this.flag++;
                }
            },
            back(){
                if (this.flag>0) {
                    this.flag--;
                }
            },
        },
        mounted(){
            axios.get('/getMovies')
                .then(res => console.log(res.data));
        }
    }
</script>

<style scoped>
    .orange{
        width: 100% !important;
    }
    .finish{
        background-color: tomato;
        color: white;
    }
    .line{
        width: 0px;
        height: 2px;
        background-color: orange;
        transition: width 1s;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    ul li{
        list-style: none;
        width: 33.33%;
        border-bottom-width: 0px;
        text-align: center;
        transition: border-bottom 1s;
    }
    ul li .box{
        font-size: 20px;
        border: 2px solid orange;
        padding: 17% 0;
        width: 50%;
        border-radius: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
        transition: all 1s;
    }
    .arrow button:nth-child(1){
        float: left;
        margin-left: 50px;
    }
    .arrow button:nth-child(2){
        float: right;
        margin-right: 50px;
    }
</style>