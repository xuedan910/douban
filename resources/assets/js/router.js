import VueRouter from 'vue-router';
import home from './components/Home.vue';
import movies from './components/Movies.vue';
import books from './components/Books.vue';
import broadcasts from './components/Broadcasts.vue';
import groups from './components/Groups.vue';
import moviedetail from './components/MovieDetail.vue';
import actordetail from './components/ActorDetail.vue';

const routes = [
    {
        path:'/home',
        component:home
    },
    {
        path:'/movies',
        component:movies
    },
    {
        path:'/movies/:id',
        name:'singlemovie',
        component:moviedetail
    },
    {
        path:'/actors/:id',
        name:'singleactor',
        component:actordetail
    },
    {
        path:'/books',
        component:books
    },
    {
        path:'/broadcasts',
        component:broadcasts
    },
    {
        path:'/groups',
        component:groups
    },
];

export default new VueRouter({
    routes
});