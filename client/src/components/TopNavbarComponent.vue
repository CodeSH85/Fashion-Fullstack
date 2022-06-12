<template>
  <nav class="nav_black top-nav navbar-p-0 navbar-expand-lg">
    <div class="topnav-brand">
      <router-link to="/">
        <img src="images/logo.svg" alt="" class="logo-img"/>
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
</template>

