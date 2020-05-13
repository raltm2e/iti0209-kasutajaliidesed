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
  // import Echarts from 'vue-echarts';
  // import 'echarts/lib/chart/bar';

  // Vue.component('chart', Echarts);

  export default {
    components: {Footer, Navbar},
    mounted() {
      const script1 = document.createElement('script');
      script1.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
      document.head.appendChild(script1);
      const script2 = document.createElement('script');
      script2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
      document.head.appendChild(script2);
      const script3 = document.createElement('script');
      script3.setAttribute('src', 'https://use.fontawesome.com/releases/v5.0.8/js/all.js');
      document.head.appendChild(script3);
    }
  }
</script>
