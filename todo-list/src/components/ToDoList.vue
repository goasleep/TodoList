<template>
    <div>
        <Header></Header>
        <AddItem @submitNewItem="addListItem"></AddItem>
        <List :todoItem = "showedItem" ></List>
        <Footer></Footer>
        
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AddItem from '@/components/AddItem.vue';
import List from '@/components/List.vue';
import Footer from '@/components/Footer.vue';

    export default {
        name: 'todolist',
        components: {
            Header,
            AddItem,
            List,
            Footer
        },
        data() {
            return {
                showedItem: []
            }
        },
        methods: {
            addListItem(newItem) {
                this.showedItem.push(newItem)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>