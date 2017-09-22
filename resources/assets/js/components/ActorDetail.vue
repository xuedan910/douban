<template>
    <div class="actor_box">
        <div class="row">
            <div class="col-xs-12">
                <p class="actor_name">{{ actor['name_en'] }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-8">
                <p>中文译名: {{ actor['name'] }}</p>
                <p>性别: {{ actor['gender'] }}</p>
                <p>出生地: {{ actor['born_place'] }}</p>
            </div>
            <div class="col-xs-4" v-if="loading">
                <img class="avatar" :src="actor.avatars.medium">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4">
                <div class="collect_btn">收藏</div>
            </div>
        </div>
        <div class="row" style="margin-top:30px;">
            <div class="col-xs-12">
                <span class="pic">个人作品</span>
                <ul class="works">
                    <li v-for="single in actor['works']">
                        <div :style="{backgroundImage:'url('+single['subject']['images']['medium']+')'}"></div>
                        <p>{{ single['subject']['title'] }}</p>
                        <p>豆瓣评分:{{ single['subject']['rating']['average'] }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                actor:{},
                loading:false,
            }
        },
        mounted(){
            axios.get('/getActorDetail/'+this.$route.params.id)
                .then(res => {
                    this.actor = res.data;
                    this.loading = true;
                });
        }
    }
</script>

<style scoped>
    .actor_box{
        margin-top: 70px;
    }
    .actor_name{
        font-size: 24px;
        color: black;
    }
    .avatar{
        width: 100%;
    }
    .collect_btn{
        border: 1px solid gold;
        padding: 5px 20px;
        color: gold;
        border-radius: 5px;
        text-align: center;
        font-size: 16px;
    }
    .pic{
        color: grey;
        font-size: 15px;
    }
    .works{
        list-style: none;
        overflow-x: scroll;
        padding: 0px;
        display: flex;
        text-align: center;
    }
    .works::-webkit-scrollbar{ display: none; }
    .works li{ 
        float: left;
        margin-right: 5px;        
    }
    .works li div{
        width: 100px;
        height: 143px;
        background-position: center;
        background-size: cover;
    }
    .works p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100px;
        color: black;
    }
</style>