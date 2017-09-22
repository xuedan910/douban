<template>
    <div class="box">
        <div class="row" v-for="activity in activities">
            <div class="col-xs-9">
                <h4>{{ activity['title'] }}</h4>
                <p>{{ activity['content'] | content }}</p>
            </div>
            <div class="col-xs-3">
                <img :src="activity['image_hlarge']">
            </div>
        </div>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

    export default{
        data(){
            return {
                activities:[],
                start:0,
            }
        },
        mounted(){
            axios.get('/getActivities/'+this.start)
                .then(res => this.activities = res.data.events);
        },
        methods:{
             infiniteHandler($state){
                
             }
        },
        filters:{
            content(value){
                value = value.replace(/<[^>]*>/g,"");
                return value.slice(0,30);
            }
        },
        components:{
            InfiniteLoading,
        }
    }
</script>

<style scoped>
    .row{ border-bottom: 1px solid #f3f3f3;padding: 20px 0px; }
    img{ width: 100%; }
</style>