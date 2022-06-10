<template>
  <nav
    class="navbar-p-3 navbar-expand-lg"
    :class="status == 'black'? 'nav_white' : 'nav_black'"
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
          <!-- <li
            class="nav-item nav-link active"
            v-for="item in navItems"
            :class="{ dropdown: item.hasDropDown }"
            :key="item.label"
          >
            <router-link
              v-if="item.hasDropDown"
              class="nav-item nav-link dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :to="item.path">
              {{ item.parentLabel }}
            </router-link>
            <router-link v-else class="nav-link link" :to="item.path">
            {{item.parentLabel}}
            </router-link>

            <ul
              v-if="item.hasDropDown"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li v-for="childItem in item.childMenu" :key="childItem.label">
                {{ childItem.label }}
              </li>
            </ul>
          </li> -->

          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" v-if="status=='black'">HOME</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <router-link
              to="/lookbook"
              class="nav-link link"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >LOOKBOOK</router-link
            >

            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="item in lookbookItems" :key="item.label">
                <a class="dropdown-item" href="{{item.path}}">{{
                  item.label
                }}</a>
              </li>
            </ul>
          </li> -->
          <li class="nav-item">
            <router-link to="/lookbook" class="nav-link link" v-if="status=='black'">LOOKBOOK</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/press" class="nav-link link" v-if="status=='black'">PRESS</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link link" v-if="status=='black'">ABOUT</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/shop" class="nav-link link" v-if="status=='white'">SHOP</router-link>
          </li>

          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <router-link to="/shop" class="link">SHOP</router-link>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">ALL</a></li>
              <li><a class="dropdown-item" href="#">TOP</a></li>
              <li><a class="dropdown-item" href="#">BOTTOM</a></li>
              <li><a class="dropdown-item" href="#">DRESS</a></li>
              <li><a class="dropdown-item" href="#">JUMPSUIT</a></li>
              <li><a class="dropdown-item" href="#">SALE</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
// export default {
//   data() {
//     const lookbookChildMenu = [
//       { label: "2022 SS", path: "/" },
//       { label: "2021 AW", path: "/" },
//       { label: "2021 SS", path: "/" },
//       { label: "2020 AW", path: "/" },
//       { label: "2020 SS", path: "/" },
//       { label: "2019 AW", path: "/" },
//       { label: "2019 SS", path: "/" },
//       { label: "2018 AW", path: "/" },
//       { label: "2018 SS", path: "/" },
//     ];
//     const shopChildMenu=[
//       { label: "ALL", path: "/" },
//       { label: "TOP", path: "/" },
//       { label: "BOTTOM", path: "/" },
//       { label: "DRESS", path: "/" },
//       { label: "JUMPSUIT", path: "/" },
//       { label: "SALE", path: "/" },

//     ];
//     return {
//       navItems: [
//         { parentLabel: "HOME", path: "/", hasDropDown: false },
//         {
//           parentLabel: "LOOKBOOK",
//           path: "/lookbook",
//           hasDropDown: true,
//           childMenu: lookbookChildMenu,
//         },
//         { parentLabel: "PRESS",
//           path: "/press",
//           hasDropDown: false,
//         },
//         { parentLabel: "ABOUT",
//           path: "/about",
//           hasDropDown: false,
//         },
//         {
//           parentLabel: "SHOP",
//           path: "/shop",
//           hasDropDown: true,
//           childMenu: shopChildMenu,
//         },

//       ],
//     };
//   },
// };
// import { useRoute } from "vue-router";
// // import { computed } from "vue";
// export default {
//   setup() {
//     // const route = useRoute();
//     // const path = computed(() => route.path);
//     console.log(this.path);
//   },
//   data() {
//     return {
//       theme: location.pathname,
//     };
//   },
//   watch() {},
// };
</script>
