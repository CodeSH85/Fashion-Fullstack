<template>
  <ShopPageButtons />
  <ProductItem />
  <div class="container-fluid">
    <div class="row">
      <div class="page_buttons h4 text-center fw-bold mt-5 d-md-block d-sm-none">
        <a href="#" class="px-3 link-dark">＜</a>
        <a href="#" class="px-3 link-dark">1</a>
        <a href="#" class="px-3 link-dark">2</a>
        <a href="#" class="px-3 link-dark">3</a>
        <a href="#" class="px-3 link-dark">4</a>
        <a href="#" class="px-3 link-dark">＞</a>
      </div>
      <div class="dropdown w-50 mx-auto d-md-none d-sm-flex justify-content-center my-4">
        <button class="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          1
        </button>
        <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">1</a></li>
          <li><a class="dropdown-item" href="#">2</a></li>
          <li><a class="dropdown-item" href="#">3</a></li>
          <li><a class="dropdown-item" href="#">4</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入元件(component)
  import ShopPageButtons from "../components/ShopPageButtons.vue"
  import ProductItem from "../components/ProductItem.vue"

  export default {
    components: {
      ShopPageButtons,
      ProductItem,
    }
  }
</script>
<style scoped>
  .page_buttons {
      margin-bottom: 100px;
  }

  .page_buttons a {
      text-decoration: none;
  }

  .page_buttons a:hover {
      color: #CC0000;
  }

  .dropdown button {
    width: 100%;
    border: solid 1px black;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 60px;
  }

  .dropdown-menu {
    width: 92%;
    border-radius: 0;
  }

  .dropdown-menu li > a:hover {
    color: white;
    background-color: black;
  }
</style>