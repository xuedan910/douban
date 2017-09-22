<template>
    <div class="detail_box" v-if="loading">
        <div class="row">
            <div class="col-xs-8">
                <h3>{{ movieDetail['title'] }}</h3>
                <p>
                    <span class="rating">豆瓣评分: {{ movieDetail['rating']['average'] }}</span>
                    <span class="ratings_count">{{ movieDetail['ratings_count'] }}人评价</span>
                </p>
                <span v-for="genre in movieDetail['genres']">{{ genre }}/</span>
                <span v-for="director in movieDetail['directors']">{{ director['name'] }}(导演)/</span>
                <span v-for="cast in movieDetail['casts']">{{ cast['name'] }}/</span>
                <span>{{ movieDetail['year'] }}年上映</span>
            </div>
            <div class="col-xs-4">
                <img :src="movieDetail['images']['medium']">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 view_button">
                <div>想看</div>
                <div>看过</div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 summary">
                <h4>{{ movieDetail['title'] }}的剧情简介</h4>
                <span>{{ summary }}</span>
                <span v-show="!showAll" @click="showAll=true">(展开)</span>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h4>影人</h4>
                <ul class="casts">
                    <li v-for="director in movieDetail['directors']">
                        <div>
                            <router-link :to="{ name:'singleactor',params:{ id:director['id'] } }">
                                <img :src="director['avatars']['small']">
                            </router-link>
                        </div>
                        <p>{{ director['name'] }}</p>
                        <p>导演</p>
                    </li>
                    <li v-for="cast in movieDetail['casts']">
                        <div>
                            <router-link :to="{ name:'singleactor',params:{ id:cast['id'] } }">
                                <img :src="cast['avatars']['small']">
                            </router-link>
                        </div>
                        <p>{{ cast['name'] }}</p>
                        <p>演员</p>
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
                movieDetail:[],
                showAll:false,
                loading:false,
            };
        },
        computed:{
            summary(){
                if (!this.showAll) {
                    if (this.movieDetail['summary'].length > 75) {
                        return this.movieDetail['summary'].slice(0,75)+'...';
                    }
                }
                return this.movieDetail['summary'];
            }
        },
        mounted(){
            axios.get('/getMovieDetail/'+this.$route.params.id)
                .then(res => {
                    this.movieDetail = res.data;
                    this.loading = true;
                });
        }
    }
</script>

<style scoped>
    .detail_box{
        margin-top: 70px;
    }
    .rating{ color: gold; }
    .ratings_count{ color: lightgrey;margin-left: 10px; }
    .col-xs-4 img{ margin-top: 22px; }
    .col-xs-8 span{ line-height: 27px; }
    .view_button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .view_button div{
        border: 1px solid gold;
        border-radius: 5px;
        text-align: center;
        padding: 5px 0px;
        color: gold;
        margin: 5px;
        flex: 1;
        font-size: 18px;
    }
    .summary h4,.col-xs-12 h4{
        padding: 30px 0px 15px;
        color: grey;
    }
    .summary p{ font-size: 15px;color: black; }
    .summary span:nth-last-child(1){ color: #42bd56; }
    .casts{
        list-style: none;
        overflow-x: scroll;
        padding: 0px;
        display: flex;
    }
    .casts::-webkit-scrollbar{ display: none; }
    .casts img{ width: 75px; }
    .casts li{
        float: left;
        margin-right: 5px;
        text-align: center;
    }
    .casts li p{
        margin: 10px 0px;
        font-size: 14px;
    }
    .casts li p:nth-last-child(1){ color: grey; }
</style>