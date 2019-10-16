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
import { setItem } from "../service/local";
export default {
    name:"login",
    data(){
        return {
            user:{
                username:"pykyjuca",
                password:"Pa$$w0rd!"
            }
        }
    },
    methods:{
        submit(){
            Api().get('/login',{params:this.user}).then(res => {
                const {token}=res.data;
                setItem('jwt', token)
                console.log('submit login')
                this.$router.push({name:"user"})
            })
        }
    }
}
</script>