<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'assets/styles/style.css';
</style>

<script>
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  export default {
    components: {Footer, Navbar}
  }
</script>
