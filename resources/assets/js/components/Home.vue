<template>
    <div>
        <category></category>
        <activities></activities>
    </div>
</template>

<script>
    import category from './Category.vue';
    import activities from './Activities.vue';

    export default{
        components:{
            category,activities
        },
    }
</script>