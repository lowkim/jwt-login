<template>
    <div>
        <p>Welcome to le user page</p>
        <button type="button" @click="logout">Logout</button>
        <p>{{username}}</p>
    </div>
</template>

<script>
import { decodeToken } from '../service/jwt';
import { getItem, removeItem } from '../service/local';

export default {
  name: 'user',
  data() {
    return {
      username: '',
    };
  },
  mounted() {
    const userData = decodeToken(getItem('jwt'));
    this.username = userData.username;
  },
  methods: {
    logout() {
      removeItem('jwt');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
