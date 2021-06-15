<template>
    <navbar/>
      <div class="container text-center ">
        <div class="d-flex justify-content-between mt-3">
            <h2 class="fw-bold  m-2">學生管理</h2>
            <button class="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#addUsers">新增學生</button>
        </div>
        <div v-click-away="onClickAway" class="course_list p-4 ">
           <ul class="list-group" >
                <div v-for="(stu,uindex) in StudentList" :key="stu"   >
                    <li class="list-group-item d-flex justify-content-between align-items-center m-1 shadow">
                            <span class="fs-5">{{stu.Name}}</span> 
                            <!-- stu.Name -->
                            <div>
                                <button @click="bj(uindex)" class="btn badge fs-5 p-2 text-dark rounded-pill" data-bs-toggle="collapse" :data-bs-target="'#tg'+stu.Name" aria-expanded="false">編輯</button>
                                <button @click="DelCourse(stu.Name)" class="btn badge fs-5 p-2 text-dark rounded-pill" >刪除</button>
                            </div>
                    </li>
                        <div class="colp collapse mb-2 hide" :id="'tg'+stu.Name">
                            <div class="card card-body d-flex ">
                                <div class="row">
                                    <div class="col-6"> 
                                         <div class="h4 d-flex ml-3">擁有課程:</div>
                                        <div id="UserCourses" class="p-3 pl-5 ">
                                            <div v-for="(course,index) in stu.UserCourses" :key="course" class="d-flex justify-content-between">
                                                    <span class="h4 ">{{course}}</span> 
                                                    <button @click="btnclick1(course,index,uindex)" class="btn badge fs-5 p-2 text-dark " >刪除</button>
                                            </div>
                                        </div>
                                    </div> 
                                     <div class="col"> 
                                          <div class="h4 d-flex ">其他課程:</div>
                                               <div id="other_courses" class="p-3 pl-5 ">
                                           <div v-for="(course,index) in stu.other_courses" :key="course" class="d-flex justify-content-between">
                                                    <span class="h4 ">{{course}}</span> 
                                                    <button @click="btnclick2(course,index,uindex)" class="btn badge fs-5 p-2 text-dark " >新增</button>
                                            </div>
                                            </div>
                                    </div> 
                                </div>
                                <div class="m-3">
                                    <button @click="submitChange(uindex)" class="btn btn-secondary float-end">確認</button>
                                </div>
                            </div>
                        </div>
                </div>
            </ul>
        </div>
      </div>

    <!-- add-account modal  -->
    <div class="modal fade" id="addUsers" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content m-5">
                <div class="modal-header">
                    <h5 class="modal-title fw-blod" id="ModalLabel">新增學生</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="test" class="container col">
                        <div class="row mb-2">
                            <label for="recipient-name" class="form-label col-4 text-start">帳號名稱 :</label>
                            <input v-model="formData.username" name="username" type="text" class="form-control col" id="recipient-name">
                        </div>
                         <div class="row">
                            <label for="recipient-name" class="form-label col-4 text-start">密碼 :</label>
                            <input v-model="formData.password" name="password" type="text" class="form-control col" id="recipient-name">
                        </div>
                           <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                                <button type="submit" class="btn btn-primary">新增學生</button>
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
                formData:{
                    username:'',
                    password:'',
                },
                StudentList:[
                    // {'name':'123', 'UserCourses':['123','bbb','ccc']},
                    // {'name':'456','UserCourses':['234','22','44']},
                    // {'name':'789','UserCourses':['424','bb234b','cc234c']},
                ],
            
                all_courses:['aaa','bbb','ccc','123','eee','hhh'],
                other_courses:[],
            }
        },
        components:{
            navbar
        },
        created:function () {
            axios.post('/userList')
            .then((res)=>{
                console.log(res.data);
                this.StudentList = res.data;
            })
            .catch((err)=>{
                console.error(err);
            })
        }, 
        mounted: function(){
        },
        methods: {
            test(){ 
               console.log("test") 
                var formData = new FormData()
                formData.append('username', this.formData.username);
                formData.append('password', this.formData.password); 
                axios.post('/addUser',formData).
                then((res)=>{
                    console.table(res.data)
                })
                .catch((err)=>console.error(err))
                .finally(()=>{
                    this.$router.go(0)
                });
            } ,
            DelCourse(id){ id;
                // axios.post('/deleteUser',{'username':id})
                // .then((res)=>{
                //     console.log(res);
                //     console.log(id);
                // })
                // .catch((err)=>{
                //     console.error(err);
                // })
                // .finally(()=>{
                //       this.$router.go(0)
                //     }
                // )
            },
            onClickAway() {
                console.log('onClickAway')
                // var eles = document.getElementsByClassName("colp");
                // for(let i=0;i<eles.length;i++)
                //     eles[i].classList.remove("show"); 
            },btnclick2(name,oindex,uindex){
                this.StudentList[uindex].UserCourses.push(name);
                this.StudentList[uindex].other_courses.splice(oindex, 1)

            },btnclick1(name,oindex,uindex){
                this.StudentList[uindex].UserCourses.splice(oindex, 1)
                this.StudentList[uindex].other_courses.push(name);
            },bj(index){
                this.StudentList[index].other_courses=[];
                for(let cindex in this.all_courses){
                    if(!(this.StudentList[index].UserCourses).includes(this.all_courses[cindex])){
                        this.StudentList[index].other_courses.push(this.all_courses[cindex]);  
                    }
                }
            },submitChange(index){
                console.log(this.StudentList[index].name);
                console.log(this.StudentList[index].UserCourses);
            }
        },
    }
</script>

<style>

</style>