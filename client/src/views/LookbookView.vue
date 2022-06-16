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
          <!-- <li  class="nav-item" v-for="lookbookInfo in lookbookInfos" :key="lookbookInfo.id">
            <router-link to="/lookbook/0" aria-current="page" class="active"
              >{{ lookbookInfo.title }} - CAMPAIGN</router-link
            >
          </li>
          <li>21 SS - CAMPAIGN</li>
          <li>20 FW - CAMPAIGN</li>
          <li>20 SS - CAMPAIGN</li>
          <li>19 FW - CAMPAIGN</li>
          <li>19 SS - CAMPAIGN</li>
          <li>19 SS - ATHENS</li>
          <li>18 FW - PARIS</li>
          <li>18 FW - CAMPAIGN</li>
          <li>17 FW - CAMPAIGN</li>
          <li>17 SS - NEW YORK</li>
          <li>17 SS - CANADA</li>  -->
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
name: "lookbookView",
  data() {
    // const lookbookInfo = lookbookInfos[Number(this.$route.params.id)];
    // const lookbookId = this.$route.params.id;
    // console.log("lookbookInfo", lookbookInfo);
    // console.log("lookbookInfos", lookbookInfos);
    // console.log("lookbookId", lookbookId);
    // console.log("lookbookimages", lookbookInfo.images);

    return {
      lookbookId: this.$route.params.id,
      lookbookInfos,
      lookbookInfo: lookbookInfos[this.$route.params.id],
    };
  },
};
</script>
