<template>
    <div id="app" class="container">
        <Header></Header>
        <AddItem @submitNewItem="addListItem"></AddItem>

        <todolist :items="itemsShow"></todolist>

        <Footer  @getStatue="getStatue"></Footer>
    </div>
</template>

<script>
import todolist from '@/components/List.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AddItem from '@/components/AddItem.vue'
export default {
    name: 'app',
    components: {
        todolist,
        Header,
        Footer,
        AddItem
    },
    data() {
        return {
            items: [],
            state: 1
        }
    },
    methods: {
        getStatue(state){
            this.state = state
        },
        addListItem(newItem){
            this.items.push({content:newItem,isChecked:false})
        }
    },
    computed: {
        itemsShow: function () {
            if(this.state === 0) {
                return this.items.filter(item=>item.isChecked==false);
            } else if(this.state === -1){
                return this.items.filter(item=>item.isChecked==true);
            } else{
            return this.items;
            }
        }
    }
}
</script>

<style>
</style>
