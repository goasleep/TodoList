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
            item: "",
            itemsCopy:[],
            state: 1
        }
    },
    methods: {
        addItem(){
            this.items.push({content:this.item,isChecked:false});
            this.itemsCopy = this.items.slice();
            this.item="";
        },
        getStatue(state){
            this.state = state
        },
        addListItem(newItem){
            this.items.push({content:newItem,isChecked:false})
            this.itemsCopy = this.items.slice();
        }
    },
    computed: {
        itemsShow: function () {
            if(this.state === 0) {
                return this.itemsCopy.filter(item=>item.isChecked==false);
            } else if(this.state === -1){
                return this.itemsCopy.filter(item=>item.isChecked==true);
            } else{
            return this.items;
            }
        }
    }
}
</script>

<style>
</style>
