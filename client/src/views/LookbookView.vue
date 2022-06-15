<template>
  <div id="lookbookpage">
    <section class="lookbook container-fluid">
      <aside class="l_aside col-md-3">
        <div class="heading m-5">
          <h2> <router-link to="/lookbook/0">LOOKBOOK/</router-link></h2>
        </div>
        <ul class="nav flex-column m-5">
           <li v-for="(lookbookInfo, i) in lookbookInfos" :key="i" class="nav-item">
            <router-link :to="`/lookbook/${i}`" aria-current="page"
              >{{ lookbookInfo.title }} - CAMPAIGN</router-link
            >
          </li>
        </ul>
      </aside>

      <aside class="row r_aside" v-if="lookbookInfo">
        <figure class="heading m-5" >
          <h2>{{ lookbookInfo.title }} /</h2>
        </figure>
        <div class="row g-3 lookbook-col col-md-6 col-lg-6">
          <img
            v-for="(imgsrc, index) in lookbookInfo.images"
            :key="`${index}lookbookInfo.image`"
            :src="imgsrc"
          />
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
import lookbookInfos from "../../public/lookbook.json";

export default {
  data(){
      return {
        lookbookId: this.$route.params.id,
        lookbookInfos,
        lookbookInfo: lookbookInfos[this.$route.params.id],
      }
  }
}
</script>
