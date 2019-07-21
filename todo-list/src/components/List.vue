<template>
    <div id="list">
        <ol>
            <li v-for="(item,index) in todoItem" v-bind:key="index">
                <ListItem :message="item"></ListItem>
            </li>
        </ol>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
    export default {
        name: "list",
        components: {
            ListItem
        },
        props: {
            todoItem: {
                type: Array,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>