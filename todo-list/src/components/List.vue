<template>
<div>
    <ol>
        <li v-for="(item, index) in items" :key="index" v-bind:class="{checked:item.isChecked}">
            <input  name="done-todo" type="checkbox"  class="done-todo" v-model="item.isChecked">
            <span>{{item.content}}</span>
        </li>
    </ol>
</div>
</template>
<script>
    export default {
        name: 'List',
        props: {
            items: Array
        },
        methods: {

        }
    }


</script>
<style></style>