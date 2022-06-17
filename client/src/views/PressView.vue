<template>
  <div id="presspage">
    <section class="press container-fluid col-10">
      <div class="row">
        <div class="heading m-5">
          <h2>PRESS /</h2>
        </div>
        <div class="press-row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
          <div
            class="press-col col-md-6"
            v-for="press in pressInfo"
            :key="press.id"
          >
            <PressCard v-bind="press"></PressCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import PressCard from "../components/PressCard.vue";

export default {
  
  data() { 
    const pressInfo = this.$store.state.pressInfo
    console.log(pressInfo)
    return {
      press: [],
      pressInfo: this.$store.state.pressInfo,
      id: this.$store.state.id,
    };
  },
 
  components: { PressCard },
};

</script>
