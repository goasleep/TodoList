<template>
    <div id="list">
        <ol>
            <ListItem></ListItem>
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
    }
</script>

<style lang="scss" scoped>

</style>