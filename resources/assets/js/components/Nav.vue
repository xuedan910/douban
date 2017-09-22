<template>
    <div class="nav_container">
        <div class="logo">
            <router-link to="/home">豆瓣</router-link>
        </div>
        <ul class="nav">
            <router-link tag="li" to="/movies">电影</router-link>
            <router-link tag="li" to="/books">图书</router-link>
            <router-link tag="li" to="/broadcasts">广播</router-link>
            <router-link tag="li" to="/groups">小组</router-link>
            <li class="search_bar" @click="search_show=true">
                <span></span>
                <span></span>
                <span></span>
                <div class="circle"></div>
                <div class="tail"></div>
            </li>
        </ul>
        <div class="search" v-show="search_show">
            <search @close="search_show=false"></search>
        </div>
    </div>
</template>

<script>
    import search from './Search.vue';

    export default{
        data(){
            return {
                search_show:false,
            }
        },
        components:{
            search,
        }
    }
</script>

<style scoped>
    .nav_container{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px 20px;
        border-bottom: 1px solid #f3f3f3;
        background-color: white;
        z-index: 2;
    }
    .logo{
        flex:1;
        color: #00b600;
        font-size: 25px;
    }
    .nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
    }
    .nav li{
        margin-right: 10px;
        font-size: 17px;
    }
    .nav li:nth-child(1){ color: rgb(35,132,232); }
    .nav li:nth-child(2){ color: rgb(159, 120, 96); }
    .nav li:nth-child(3){ color: rgb(228, 168, 19); }
    .nav li:nth-child(4){ color: rgb(42, 184, 204); }
    .search_bar{ position: relative; }
    .search_bar span{
        display: block;
        background-color: #00b600;
        height: 2px;
    }
    .search_bar span:nth-child(1){ width: 15px; }
    .search_bar span:nth-child(2){ width: 10px;margin: 4px 0px; }
    .search_bar span:nth-child(3){ width: 10px; }
    .search_bar div{ position: absolute; }
    .circle{
        width: 11px;
        height: 11px;
        border-radius: 100%;
        border: 2px solid #00b600;
        top: 3px;
        left: 11px;
    }
    .tail{
        width: 8px;
        height: 2px;
        background-color: #00b600;
        transform: rotate(45deg);
        left: 18px;
    }
    .search{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1000px;
        background-color: white;
        z-index: 99;
    }
</style>