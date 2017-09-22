<template>
    <div>
        <form class="search_box form-horizontal">
            <div class="form-group">
                <label class="col-xs-2 control-label" @click="close()">关闭</label>
                <div class="col-xs-10">
                    <input type="text" class="form-control" v-model="searchContent" @keyup.enter.prevent="search()">
                </div>
            </div>
        </form>
        <ul>
            <li>
                <div style="color:rgb(35, 132, 232);">电影</div>
                <span>影院热映</span>
            </li>
            <li>
                <div style="color:rgb(122, 106, 219);">电视</div>
                <span>正在热播</span>
            </li>
            <li>
                <div style="color:rgb(159, 120, 96);">图书</div>
                <span>畅销排行</span>
            </li>
            <li>
                <div style="color:rgb(230, 70, 126);">同城</div>
                <span>周末活动</span>
            </li>
            <li>
                <div style="color:rgb(42, 184, 204);">小组</div>
                <span>志趣相投</span>
            </li>
            <li>
                <div style="color:rgb(244, 143, 46);">音乐</div>
                <span>新碟榜</span>
            </li>
            <li>
                <div style="color:rgb(159, 120, 96);">阅读</div>
                <span>电子书</span>
            </li>
            <li>
                <div style="color:rgb(87, 116, 197);">游戏</div>
                <span>虚拟世界</span>
            </li>
            <li>
                <div style="color:rgb(89, 108, 221);">应用</div>
                <span>玩手机</span>
            </li>
            <li>
                <div style="color:rgb(225, 100, 77);">东西</div>
                <span>心爱之物</span>
            </li>
            <li>
                <div style="color:rgb(64, 207, 169);">FM</div>
                <span>红心歌单</span>
            </li>
            <li>
                <div style="color:rgb(66, 189, 86);">市集</div>
                <span>购买原创</span>
            </li>
        </ul>
        <div class="nav-bottom">
            <div class="nav-item">
                <span>注册账号</span>
                <span>登录豆瓣</span>
            </div>
            <div class="nav-item">
                <span>使用桌面版</span>
                <span>使用豆瓣App</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                searchContent:'',
            }
        },
        methods:{
            close(){
                this.searchContent = '';
                this.$emit('close');
            },
            search(){
                if(this.searchContent.trim().length == 0){
                    return false;
                }
                this.$router.push({path:'/home'});
                this.close();
            }
        }
    }
</script>

<style scoped>
    .search_box{ 
        padding: 10px 30px;
        border-bottom: 1px solid lightgrey;
    }
    .search_box label{
        font-size: 16px;
        color: #42bd56;
        padding-top: 7px;
    }
    .form-group{
        margin-bottom: 0px;
    }
    ul{
        list-style: none;
        padding: 0px;
        padding-top: 25px;
        margin-left: -30px;
        margin-right: -30px;
        text-align: center;
        overflow: hidden;
    }
    ul li{
        float: left;
        display: block;
        width: 33.33%;
        margin-bottom: 25px;
    }
    ul li div{
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }
    ul li span{
        color: #999;
        font-size: 12px;
        height: 17px;
        letter-spacing: 1px;
    }
    .nav-bottom{ border-top: 1px solid #f3f3f3;border-bottom: 1px solid #f3f3f3; }
    .nav-item{ padding: 13px 0px;display: flex; }
    .nav-item:nth-child(1){ border-bottom: 1px solid #f3f3f3; }
    .nav-item span{
        color: #42bd56;
        width: 50%;
        font-size: 15px;
        text-align: center;
        display: inline-block;
    }
    .nav-item span:nth-child(1){
        border-right: 1px solid #f3f3f3;
    }
</style>