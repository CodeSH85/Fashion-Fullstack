<template>
  <nav
    :class="[darkModeClass, greyModeClass]"
    class="topnav navbar-p-3 navbar-expand-lg px-5"
  >
    <!-- topnav -->
    <div class="topnav-brand">
      <router-link to="/">
        <div class="logo-img" ></div>
      </router-link>
    </div>

    <div class="item-list container-fluid p-0">
      <ul class="d-flex m-0">
        <li class="topnav-item">
          <router-link to="/login">Sign in</router-link>
        </li>
        <li class="topnav-item">
          <router-link to="/bag">Bag</router-link>
        </li>
      </ul>
    </div>
    </nav>
    <!-- navbar -->
    <nav  :class="[darkModeClass, greyModeClass]" class="navbar navbar-p-3 navbar-expand-lg">
      <div class="container-fluid" style="border: 2px solid #CC0000;">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">三</span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >HOME</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/lookbook/0" class="nav-link link"
                >LOOKBOOK</router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/press" class="nav-link link">PRESS</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link link">ABOUT</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/shop" class="nav-link link">SHOP</router-link>
            </li>
          </ul>
        </div>
      </div>
    
  </nav>
</template>
<script>
export default {
  name: "NavbarComponent",
  computed: {
    darkModeClass() {
      //console.log('darkModeClass')
      return {
        dark: !!this.$route.meta?.darkMode,
      };
    },
    greyModeClass() {
      //console.log('greyModeClass')
      return {
        grey: !!this.$route.meta?.greyMode,
      };
    },
  },
};
</script>
