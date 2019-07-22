<template>
    <div id="footer">
        <button id="all" @click="show(1)">All</button>
        <button id="active" @click="show(0)">Active</button>
        <button id="complete" @click="show(-1)">Complete</button>

    </div>
</template>

<script>
    export default {
        name:"footer",
    
        methods: {
            show(status) {
                this.$emit('getStatue', status)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>