<template>
  <nav class="top-nav navbar-p-0 navbar-expand-lg">
    <div class="topnav-brand">
      <router-link to="/">
        <img src="images/logo.svg" alt="" class="logo-img"/>
      </router-link>
    </div>
    <div class="item-list container-fluid p-0">
      <ul class="d-flex m-0">
        <li class="topnav-item">
          <a><router-link to="/account">Sign in</router-link></a>
        </li>
        <li class="topnav-item">
          <a><router-link to="/bag">Bag</router-link></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>

</style>
