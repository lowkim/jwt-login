<template>
    <div>
        <p>Welcome to le user page</p>        
    </div>
</template>

<script>
import {decodeToken} from '../service/jwt'
import {getItem} from '../service/local'
export default {
    name:'user',
    data(){
        return {

        }
    },
    mounted() {
        console.log(decodeToken(getItem('jwt')))
        // this.getUserData()
    },
    methods:{
        getUserData(){
            Api().get('/user').then(res => {
                console.log()
            })
        }
    }
}
</script>