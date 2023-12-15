<template>
  <div id="app">
    <Header id="header"/>
<!--    <Headerlogin id="headerlogin"/>-->
    <router-view/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Headerlogin from "@/components/Headerlogin";
export default {
  name: 'App',
  components: {Footer, Header},
  data(){
      return{
        check1:false,
        check2:undefined
      }
  },
  created() {
  }
}
</script>

<style>
@media print {
  #header,
  #footer {
    display: none;
  }
}
</style>