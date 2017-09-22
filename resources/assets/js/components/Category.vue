<template>
    <div class="box">
        <div class="item"><a href="#">影院热映</a></div>
        <div class="item"><a href="#">欧美新碟榜</a></div>
        <div class="item"><a href="#">注册账号</a></div>
        <div class="item"><a href="#">登录豆瓣</a></div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .box{
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .box .item{
        padding: 3px;
        width: 50%;
        text-align: center;
        box-sizing: border-box;
    }
    .box .item a{
        display: block;
        padding: 14px 20px;
        color: black;
        background-color: #f6f6f6;
    }
</style>