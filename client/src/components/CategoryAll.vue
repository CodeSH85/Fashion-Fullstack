<template>
  <!-- 未分類商品畫面元件 -->
  <div class="row col-10 mx-auto">
    <div class="d-flex flex-wrap justify-content-center">
    <!-- 使用ProductItem元件 -->
      <template v-for="product in data" :key="product.id">
        <ProductItem v-bind="product"></ProductItem>
      </template>
    </div>
  </div>
</template>
<script>
  import ProductItem from "../components/ProductItem.vue"

  export default {
    components: {
      ProductItem,
    },
    data () {
      return {
        data: this.$store.state.data,
      }
    }
  }
</script>