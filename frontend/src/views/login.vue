<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username" />
      </div>
      <div class="form-group">
        <label for="username">Password</label>
        <input type="text" name="username" v-model="user.password" />
        <button class="btn" type="button" @click="submit">Login</button>
        <router-link class="btn" :to="{path:'signup'}" tag="button">Create Account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Api from '../service/Api';
import { setItem } from '../service/local';

export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submit() {
      Api()
        .get('/login', { params: this.user })
        .then((res) => {
          const { token } = res.data;
          setItem('jwt', token);
          this.$router.push({ name: 'user' });
        });
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-group {
  display: grid;
}

.form-group > input {
  width: 500px;
  margin: 8px 0;
  padding: 10px 2px;
  border: 1px solid #ccc;
}

.btn {
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
