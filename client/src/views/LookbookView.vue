<template>
  <div id="lookbookpage">
    <section class="lookbook container-fluid">
      <aside class="l_aside col-3">
        <figure class="heading m-5">
          <h2>LOOKBOOK /</h2>
        </figure>
        <ul>
          <li class="current"><a href="">22 SS - CAMPAIGN</a></li>
          <li><a href="">21 FW - CAMPAIGN</a></li>
          <li><a href="">21 SS - CAMPAIGN</a></li>
          <li><a href="">20 FW - CAMPAIGN</a></li>
          <li><a href="">20 SS - CAMPAIGN</a></li>
          <li><a href="">19 FW - CAMPAIGN</a></li>
          <li><a href="">19 SS - CAMPAIGN</a></li>
          <li><a href="">19 SS - ATHENS</a></li>
          <li><a href="">18 FW - PARIS</a></li>
          <li><a href="">18 FW - CAMPAIGN</a></li>
          <li><a href="">17 FW - CAMPAIGN</a></li>
          <li><a href="">17 SS - NEW YORK</a></li>
          <li><a href="">17 SS - CANADA</a></li>
        </ul>
      </aside>

      <aside class="row r_aside">
        <figure class="heading m-5">
          <router-link :to="`/lookbook/${$route.params.lookbookId}`"><h2>{{lookbookInfo.title}} /</h2></router-link>
<router-view/>
          
        </figure>
       <div class="lookbook-col" 
          v-for="press in pressInfo" 
          :key="press.id">
            <PressCard v-bind="press"></PressCard>
        </div>

      </aside>

    </section>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data(){
      return {
          lookbookInfo: {}
      }
  },
  computed:{
      lookbookId(){
          return this.$route.params.lookbookId
      }
  },
  watch:{
      userId: function(newlookbookId){
        this.fetchLookbookInfo(newlookbookId);
      }
  },
  mounted(){
      let lookbookId = this.$route.params.lookbookId
      this.fetchLookbookInfo(lookbookId);
  },
  methods:{
    //  fetchLookbookInfo(lookbookId){
    //    axios.get("/lookbook.json/${lookbookId}")
    //    .then(response => this.lookbookInfo = response.data)
    //  }
  }
}
</script>