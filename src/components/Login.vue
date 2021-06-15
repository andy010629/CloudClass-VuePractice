<template >
    <div class="d-flex h-100">
        <div class="container align-self-center text-center" >
            <h1 class="font-weight-normal mb-5">中途之家補習班</h1>
            <form v-on:submit.prevent="loginSubmit" id="loginForm" class="form-login shadow-lg rounded-3 border-3 pb-5 p-4">
                <h4 class="mb-3">雲端課程系統</h4>
                <label class="sr-only">帳號</label>
                <input  v-model="formData.username" type="Account" id="inputEmail" class="form-control mb-3" placeholder="帳號" required=" " autofocus=" " />
                <label class="sr-only">密碼</label>
                <input  v-model="formData.password" type="password" id="inputPassword" class="form-control mb-3" placeholder="密碼" required=" " />
                <button id="submitBtn" class="btn btn-lg btn-primary btn-block"  type="submit">
            登入
            </button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    // import router from "vue-router"
    export default {
        name: 'Login',
        data(){
            return {
                formData:{
                    username:'',
                    password:'',
                }
            }
        },methods: {
            
            loginSubmit(){
                var formData = new FormData()
                formData.append('username', this.formData.username);
                formData.append('password', this.formData.password); 
                axios.post('/login',formData).
                then((res)=>{
                  if(this.formData.username=="admin")
                     this.$cookies.set('admin','');
                  this.$router.push("/");
                  console.table(res);
                })
                .catch((err)=>console.error(err));
            }
        },
    }
</script>
