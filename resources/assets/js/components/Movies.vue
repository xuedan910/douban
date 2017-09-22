<template>
    <div class="movie_box">
        <h4>影院热映</h4>
        <ul>
            <li v-for="movie in movies">
                <div>
                    <router-link :to="{ name:'singlemovie',params:{ id:movie['id'] } }">
                        <img :src="movie['images']['medium']">
                    </router-link>
                </div>
                <span class="title">{{ movie['title'] }}</span>
            </li>
        </ul>
        <h4 style="margin-top:30px;">免费在线观影</h4>
        <ul>
            <li v-for="freeMovie in freeMovies">
                <div>
                    <router-link :to="{ name:'singlemovie',params:{ id:freeMovie['id'] } }">
                        <img :src="freeMovie['images']['medium']">
                    </router-link>
                </div>
                <span class="title">{{ freeMovie['title'] }}</span>
            </li>
        </ul>
        <h4 style="margin-top:30px;">TOP 250</h4>
        <ul>
            <li v-for="topMovie in topMovies">
                <div>
                    <router-link :to="{ name:'singlemovie',params:{ id:topMovie['id'] } }">
                        <img :src="topMovie['images']['medium']">
                    </router-link>
                </div>
                <span class="title">{{ topMovie['title'] }}</span>
            </li>
        </ul>
        <h4 style="margin-top:30px;">分类浏览</h4>
        <ul class="category">
            <li>经典<span></span></li>
            <li>冷门佳片<span></span></li>
            <li>豆瓣高分<span></span></li>
            <li>动作<span></span></li>
            <li>喜剧<span></span></li>
            <li>爱情<span></span></li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                movies:[],
                freeMovies:[],
                topMovies:[],
            }
        },
        mounted(){
            axios.get('/getMovies')
                .then(res => this.movies = res.data.subjects);
            axios.get('/getFreeMovies')
                .then(res => this.freeMovies = res.data.subjects);
            axios.get('/getTopMovies')
                .then(res => this.topMovies = res.data.subjects);
        }
    }
</script>

<style scoped>
    h4{ color: black; }
    .movie_box{ 
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .movie_box ul:not(.category){
        list-style: none;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap; 
        overflow-x: scroll;
    }
    .movie_box ul::-webkit-scrollbar{ display: none; }
    .movie_box ul:not(.category) li{
        width: 100px;
        margin-right: 5px;
        text-align: center;
    }
    .movie_box ul li div{ width: 100px; }
    img{
        width: 100%;
        height: 143px;
    }
    .title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        color: black;
        font-size: 15px;
    }
    .category{
        display: block;
        padding: 0px;
        list-style: none;
        overflow: hidden;
    }
    .category li{
        float: left;
        width: 50%;
        color: #42bd56;
        border-top: 1px solid #f3f3f3;
        border-right: 1px solid #f3f3f3;
        padding: 10px 5px;
        box-sizing: border-box;
    }
    .category li:nth-child(even){
        border-right: none;
    }
    .category li:nth-last-child(1){
        border-bottom: 1px solid #f3f3f3;
    }
    .category li:nth-last-child(2){
        border-bottom: 1px solid #f3f3f3;
    }
    .category li span{
        display: block;
        float: right;
        width: 10px;
        height: 10px;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        transform: rotate(45deg);
        margin-top: 5px;
    }
</style>