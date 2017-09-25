<template>
    <div class="row">
        <div class="col-xs-12 books_result">
            <h4 class="title">{{ type }}</h4>
            <ul v-if="loading">
                <li v-for="item in items">
                    <img v-if="type=='音乐'" :src="item['image']">
                    <img v-else :src="item['images']['medium']">
                    <div>
                        <h4>{{ item['title'] }}</h4>
                        <span>豆瓣评分: {{ item['rating']['average'] }}</span>
                    </div>
                </li>
                <li class="more"><a href="#">更多{{ type }}结果</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        props:['type','resultData'],
        data(){
            return {
                loading:false,
            }
        },
        mounted(){
            this.loading = true;
        },
        computed:{
            items(){
                switch(this.type){
                    case '图书':
                        return this.resultData.books;
                        break;

                    case '电影':
                        return this.resultData.subjects;
                        break;

                    case '音乐':
                        return this.resultData.musics;
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .books_result{ padding-left: 30px;margin-bottom: 15px; }
    .books_result .title{ color: #aaa; }
    .books_result ul{
        list-style: none;
        padding-left: 0;
    }
    .books_result ul li{
        display: block;
        border-bottom: 1px solid #f3f3f3;
        overflow: hidden;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .books_result ul li img{
        float: left;
        margin-right: 10px;
        width: 80px;
    }
    .more a{
        color: #42bd56;
        font-size: 15px;
    }
</style>