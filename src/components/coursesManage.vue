<template>
    <navbar/>
      <div class="container text-center ">
        <div class="d-flex justify-content-between mt-3">
            <h2 class="fw-bold m-2">課程管理</h2>
            <button class="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#addUsers">新增課程</button>
        </div>
        <div class="course_list m-3 ">
           <ul class="list-group">
               <div v-for="course in course_list" :key="course">
                    <li class="list-group-item d-flex justify-content-between align-items-center m-1 shadow">
                        <span class="fs-5">{{course}}</span>
                        <button class="btn badge fs-5 p-2 text-dark rounded-pill">刪除</button>
                    </li>
               </div>
            </ul>
        </div>
      </div>


    <!-- add-account modal  -->
    <div class="modal fade" id="addUsers" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content m-5">
                <div class="modal-header">
                    <h5 class="modal-title fw-blod" id="ModalLabel">新增課程</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="add_course" class="container col">
                        <div class="row mb-2">
                            <!-- <label for="recipient-name" class="form-label m-1 col-4 text-start">課程名稱 :</label> -->
                            <!-- <input v-model="formData.username" name="username" type="text" class="form-control col" id="recipient-name"> -->
                            <input class="file" name="file" type="file" @change="changeFile"/>
                        </div>
                           <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                                <button @click="add_course" type="submit" class="btn btn-primary">新增課程</button>
                            </div>
                    </form>
                  
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
     import navbar from "./navbar.vue"
     import axios from "axios"
    export default {
        data(){
            return {
                formData:new FormData(),
                course_list:[]
            }
        },
        components:{
            navbar
        },
        created:function () {
            axios.post('/userList')
            .then((res)=>{
                console.log(res.data);
                this.course_list = res.data;
            })
            .catch((err)=>{
                console.error(err);
            })
        }, 
        methods: {
             add_course(){ 
                axios.post('/uploadVideo',this.formData).
                then((res)=>{
                    console.table(res.data)
                })
                .catch((err)=>console.error(err))
                .finally(()=>{
                    this.$router.go(0);
                });

            } , 
            changeFile(e) {
                this.formData.append('file', e.target.files[0])
            },
        },
    }
</script>

<style>

</style>