<template>
  <nav
    class="nav_black navbar-p-3 navbar-expand-lg"
    :class="{ black: theme === 'black' }"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">三</span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lookbook" class="nav-link link" aria-current="page">LOOKBOOK</router-link>
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
