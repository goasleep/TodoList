<template>
    <div>
        <Header></Header>
        <AddItem></AddItem>
        <List></List>
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
    }
</script>

<style lang="scss" scoped>

</style>