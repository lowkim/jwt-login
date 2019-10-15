<template>
<form>
  <label for="username">Username</label>
  <input type="text" name="username" v-model="user.username">
  <label for="email">Email</label>
  <input type="email" name="email" v-model="user.email">
  <label for="password">Password</label>
  <input type="password" name="password" v-model="user.password">
  <label for="cfmPassword">Confirm Password</label>
  <input type="password" name="cfmPassword" v-model="user.cfmPassword">
  <button type="button" @click="submit">Submit</button>
</form>
</template>

<script>
import Api from '../service/Api'
export default {
    name:"signup",
    data(){
      return{
        user:{
          username:"",
          email:"",
          password:"",
          cfmPassword:""
        } 
      }
    },
    mounted() {
      console.log(process.env.VUE_APP_API_ENDPOINT)
    },
    methods:{
      submit(){
        Api().post('/signup', this.user).then(res => {
          console.log(res)
        })
      }
    }
}
</script>