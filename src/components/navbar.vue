<template>
  
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container container-fluid">
                <a class="navbar-brand fw-bold fs-3" href="./index.html">中途補習班</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" class="colp collapse navbar-collapse fs-5">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                             <li v-if="isadmin" class="nav-item">
                                <a class="nav-link" aria-current="page" href="./courses_manage">課程管理</a>
                             </li>
                            <li v-if="isadmin" class="nav-item">
                                <a class="nav-link" aria-current="page" href="./student_manage">學生管理</a>
                             </li>
                            <li v-else class="nav-item">
                                <a class="nav-link" aria-current="page" href="./courses">課程列表</a>
                            </li>
                    </ul>
                    <a href="#" @click="logout" class="nav-link nav-text text-light">登出</a>
                </div>
            </div>
        </nav>
   
</template>

<script>
    // import axios from "axios"
    export default {
        name: 'navbar',
        data(){
            return{
                isadmin: this.$cookies.isKey('admin'),
            }
        },
        methods: {
            logout(){
                this.$cookies.remove('admin');
                this.$cookies.remove('ID');
            }
        },  
    }
</script>
