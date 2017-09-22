<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered" :class="{'table-striped':stripe}">
                    <tbody>
                        <tr>
                            <td colspan="4">
                                <label for="stripe">Stripe</label>
                                <input id="stripe" type="checkbox" v-model="stripe">
                                <label for="edit">Editable</label>
                                <input id="edit" type="checkbox" v-model="edit">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <input type="text" class="form-control" v-model="name" placeholder="Filter Names">
                            </td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Name <button class="btn btn-primary" @click="sortNames()">Sort</button></td>
                            <td>Age</td>
                            <td>Email</td>
                        </tr>
                        <tr class="single" v-for="(person,index) in peopleNew">
                            <td v-text="index"></td>
                            <td v-if="!edit">{{ person['name'] }}</td>
                            <td v-else><input type="text" :value="person['name']" ref="inputName" @blur="save(index)"></td>
                            <td v-text="person['age']"></td>
                            <td v-text="person['email']"></td>
                        </tr>
                        <tr>
                            <td colspan="4" v-show="peopleNew.length == 0">No More Data...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                stripe:false,
                edit:false,
                order:'asc',
                name:'',
                people:[],
            }
        },
        computed:{
            peopleNew(){
                var arr = [];
                this.people.forEach(person => {
                    if (person['name'].indexOf(this.name) >= 0) {
                        arr.push(person);
                    }
                });
                return _.orderBy(this.people,'name',this.order);
            }
        },
        mounted(){
            axios.get('/data')
                .then(res => this.people = res.data);
        },
        methods:{
            save(index){
                this.people[index]['name'] = this.$refs.inputName[index].value;
            },
            sortNames(){
                this.order = this.order == 'asc' ? 'desc' : 'asc';console.log(this.order);               
            }
        },
    }
</script>

<style scoped>
    td{
        width:25%;
    }
    .btn-primary{
        padding: 0 12px;
    }
    .single input{
        border:none;
        background: none;
        padding: 0;
        width: 100%;
    }
</style>
