<template>
    <div class="search_container">
        <form class="search_box form-horizontal">
            <div class="form-group">
                <div class="col-xs-10">
                    <input type="text" class="form-control" v-model="searchContent">
                </div>
                <label class="col-xs-2 control-label" @click="search()">搜索</label>
            </div>
        </form>
        <singleresult type="图书" :resultData="books"></singleresult>
        <singleresult type="音乐" :resultData="musics"></singleresult>
        <singleresult type="电影" :resultData="movies"></singleresult>
    </div>
</template>

<script>
    import singleresult from './SingleSearchResult.vue';

    export default{
        components:{
            singleresult
        },
        data(){
            return {
                searchContent:'',
                books:[],
                movies:[],
                musics:[],
            }
        },
        watch:{
            "$route":'loadData'
        },
        mounted(){
            this.loadData();
        },
        methods:{
            loadData(){
                this.searchContent = this.$route.params.tag;
                axios.get('/searchResults/books/'+this.$route.params.tag)
                    .then(res => this.books = res.data);
                axios.get('/searchResults/musics/'+this.$route.params.tag)
                    .then(res => this.musics = res.data);
                axios.get('/searchResults/movies/'+this.$route.params.tag)
                    .then(res => this.movies = res.data);
            },
            search(){
                this.$router.push('/searchresults/'+this.searchContent);
            }
        }
    }
</script>

<style scoped>
    .search_container{
        margin-top: 70px;
    }
    .search_box{ 
        padding: 10px 30px;
        margin-left: -15px;
        margin-right: -15px;
        border-bottom: 1px solid #f3f3f3;
    }
    .search_box label{
        font-size: 16px;
        color: #42bd56;
        padding-top: 7px;
    }
    .form-group{
        margin-bottom: 0px;
    }

</style>