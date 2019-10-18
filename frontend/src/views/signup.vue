<template>
<div class="container">
  <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" name="username" v-model="user.username">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="user.email">
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="user.password">
    </div>
    
    <div class="form-group">
      <label for="cfmPassword">Confirm Password:</label>
      <input type="password" name="cfmPassword" v-model="user.cfmPassword">
      <button class="btn" type="button" @click="submit">Sign Up</button>
      <router-link class="btn" :to="{path:'login'}" tag="button">Back</router-link>
    </div>

  </form>
</div>
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
        console.log(this.user.username)
        console.log(this.user.password)
        Api().post('/signup', this.user).then(res => {
          this.$router.push({name:'login'})
        })
      }
    }
}
</script>

<style scoped>
.container{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}

.form-group{
  display: grid;
}

.form-group > input{
  width: 500px;
  margin: 8px 0;
  padding: 10px 2px;
  border: 1px solid #ccc;
}

.btn{
  width: 100%;
  background-color: rgb(14, 54, 141);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>