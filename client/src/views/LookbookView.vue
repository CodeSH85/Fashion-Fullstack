<template>
  <div id="lookbookpage">
    <section class="lookbook container-fluid">
      <aside class="l_aside col-3">
        <figure class="heading m-5">
          <h2>LOOKBOOK /</h2>
        </figure>
        <ul>
          <li v-for="(item, i) in lookbookInfos" :key="i">
            <router-link :to="`/lookbook/${i}`"
              >{{ item.title }} - CAMPAIGN</router-link
            >
          </li>
          <!-- <li>21 FW - CAMPAIGN</li>
          <li>21 SS - CAMPAIGN</li>
          <li>20 FW - CAMPAIGN</li>
          <li>20 SS - CAMPAIGN</li> -->
          <!-- <li>19 FW - CAMPAIGN</li>
          <li>19 SS - CAMPAIGN</li>
          <li>19 SS - ATHENS</li>
          <li>18 FW - PARIS</li>
          <li>18 FW - CAMPAIGN</li>
          <li>17 FW - CAMPAIGN</li>
          <li>17 SS - NEW YORK</li>
          <li>17 SS - CANADA</li> -->
        </ul>
      </aside>

      <aside class="row r_aside" v-if="lookbookInfo">
        <figure class="heading m-5">
          <h2>{{ lookbookInfo.title }} /</h2>
        </figure>
        <div class="lookbook-col">
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
  data() {
    const lookbookInfo = lookbookInfos[Number(this.$route.params.id)];
    const lookbookId = this.$route.params.id;
    console.log("lookbookInfo", lookbookInfo);
    console.log("lookbookInfos", lookbookInfos);
    console.log("lookbookId", lookbookId);
    console.log("lookbookimages", lookbookInfo.images);

    return {
      lookbookInfos,
      lookbookInfo: lookbookInfos[Number(this.$route.params.id)],
      lookbookId: this.$route.params.id,
    };
  },
};
</script>
