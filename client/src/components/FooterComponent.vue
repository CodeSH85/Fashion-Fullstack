<template>
  <!-- Footer元件 -->
  <div class="container-fluid">
    <div class="row">
      <div class="footer_border py-md-3 py-sm-5">
        <nav>
          <ul class="media_links text-center ps-0">
            <li class="d-lg-inline px-3 d-sm-block">
              <a class="link-dark" href="https://www.facebook.com/official.JENNLEE?fref=ts" target="_blank">FACEBOOK</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="link-dark" href="https://twitter.com/jennleeofficial" target="_blank">TWITTER</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="link-dark" href="https://www.instagram.com/jennlee_official/" target="_blank">INSTAGRAM</a>
            </li>
            <li class="d-lg-inline px-3 pt-3 d-sm-block">
              <a class="link-dark" href="https://www.youtube.com/channel/UCI8vjQvPvjuwp9dHIDFpNHg" target="_blank">YOUTUBE</a>
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


</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .border{
    color: white;
  }
  .footer_border {
    border: solid 2px $redColor;
    margin-top: 50px;
  }

  .media_links {
    list-style: none;
  }

  .media_links > li a {
    text-decoration: none;
  }

  .media_links > li a:hover {
    color: $redColor;
  }

  .copyright {
    color: $grayColor;
  }
</style>
