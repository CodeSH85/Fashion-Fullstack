<template>
  <Navbar />
    <router-view/>
  <Footer />
</template>
<script>
// 引入元件(component)
  import Navbar from "./components/NavbarComponent.vue"
  import Footer from "./components/FooterComponent.vue"

  export default {
    components: {
      Navbar,
      Footer,
    }
  }
</script>
<style lang="scss">
// scss樣式 
// scss 可引入 bootstrap 格線系統來排版(container,col,等)，但避免使用bs的樣式(修改困難)
  @import "./assets/scss/main.scss";

  body {
    background-color: $bgColor;
    overflow-x: hidden;
  }

</style>
