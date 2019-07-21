<template>
    <div id="addItem">
        <input id="add_input" type="text" v-model="newItem">
        <button id="add_button" @click="handlerAddItem">Add</button>
    </div>
</template>

<script>
    export default {
        name: "addItem",
        data() {
            return {
                newItem: ""
            }
        },
        methods: {
            handlerAddItem() {
                this.$emit("submitNewItem",this.newItem);
                this.newItem = "";
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>