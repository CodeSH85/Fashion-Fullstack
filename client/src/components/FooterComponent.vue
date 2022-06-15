<template>
  <!-- Footer元件 -->
  <div :class="[darkModeClass, greyModeClass]" class="footer-border container-fluid" style="justify-content: center;border:2px solid #CC0000;">
    <div class="row">
      <div class="mt-5 py-md-3 py-sm-5">
        <nav>
          <ul class="media_links text-center ps-0">
            <li class="d-lg-inline px-3 d-sm-block">
              <a class="" href="https://www.facebook.com/official.JENNLEE?fref=ts" target="_blank">FACEBOOK</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="" href="https://twitter.com/jennleeofficial" target="_blank">TWITTER</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="" href="https://www.instagram.com/jennlee_official/" target="_blank">INSTAGRAM</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="" href="https://www.youtube.com/channel/UCI8vjQvPvjuwp9dHIDFpNHg" target="_blank">YOUTUBE</a>
            </li>
          </ul>
        </nav>
        <div class="copyright text-center mt-md-0 mt-sm-4">
          <small class="d-lg-inline d-sm-block">COPYRIGHT © 2015 JENN LEE </small>
          <small class="d-lg-inline d-sm-block">ALL RIGHTS RESERVED</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
computed: {
  darkModeClass() {
    return { 
      dark:!!this.$route.meta?.darkMode
    };  
  },
  greyModeClass() {
    return { 
      grey:!!this.$route.meta?.greyMode
    };
  }
}
}
</script>
