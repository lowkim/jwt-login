<template>
    <form>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username">
        <label for="username">Password</label>
        <input type="text" name="username" v-model="user.password">
        <button type="button" @click="submit">Login</button>
    </form>
</template>

<script>
import Api from '../service/Api'
export default {
    name:"login",
    data(){
        return {
            user:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        submit(){
            Api().get('/login',{params:this.user}).then(res => {
                console.log(res)
            })
        }
    }
}
</script>