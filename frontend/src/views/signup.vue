<template>
<form>
  <label for="username">Username</label>
  <input type="text" name="username">
  <label for="email">Email</label>
  <input type="email" name="email">
  <label for="password">Password</label>
  <input type="password" name="password">
  <label for="cfmPassword">Confirm Password</label>
  <input type="password" name="cfmPassword">
  <input type="submit" value="Submit">
</form>
</template>

<script>
export default {
    name:"signup"
}
</script>