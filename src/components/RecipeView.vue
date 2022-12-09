<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>RECIPES ONLINE</h1> 
    <p>{{ msg }}</p> 
    <CheckBox></CheckBox>
 </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default
{
  name: 'RecipeView',
  data(){
    return {
      msg: "HELLO"
    }

  },
  methods:{
    getMessage(){
      const path = `${process.env.VUE_APP_ROOT_URL}/`
      axios.get(path)
      .then(response =>( this.msg= response.data ))
      .catch(error => consoles.log(error))
    }
  },
  created(){
      this.getMessage()
      console.log("DONE")
    }
}
</script>
