<template>
    <navbar/>
        
        <div class="container col h-100">
        <div class="row">
            <div class="mt-4">
                <div v-for="course in user_courses" :key="course">
                    <button @click="showVideo(course)" id="class-card" class="btn text-nowrap text-light m-2 rounded-pill float-start">	{{course}} </button>
                </div>
            </div>
            
                <video controls width="100%" class="p-5" :src="video_src"
                            type="video/mp4" id="myVideo">
                </video>
        </div>
        </div>
   
    
</template>

<script>
    import navbar from "./navbar.vue"
    export default {
        data(){
            return {
                user_courses:['線性代數','程式設計1','程式設計2','計算機概論','體育','離散數學'],
                video_src:"123",
            } 
        },
        components:{
            navbar
        },  
        methods: {
            showVideo(course){
                course;
                this.video_src = "https://www.w3schools.com/html/mov_bbb.mp4";
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>

<qs> </qs>