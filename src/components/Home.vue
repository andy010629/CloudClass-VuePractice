<template>
    <navbar/>
</template>

<script>
    import navbar from './navbar.vue'
    export default {
        data(){
            return {
                test:[1,2,3],
            } 
        },
        components:{
            navbar
        }
    }

</script>

<style scoped>
    
</style>