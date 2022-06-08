<template>
  <div id="presspage">
    <section class="container-fluid">
      <div class="heading-container flex">
        <h1>This is an Press page</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-3 my-5">
        <template v-for="press in pressInfo" :key="press.id">
          <PressCard v-bind="press">
            <router-link
              class="btn btn-warning"
              :to="{ name: 'Press', params: { pressId: press.id } }"
              >buy</router-link
            >
          </PressCard>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import PressCard from "../components/PressCard.vue"

export default {
  data () {
    return {
      press: [],
      pressInfo: this.$store.state.pressInfo,
      id: this.$store.state.id,
    };
  },
  methods: {
    redirectProduct: function(id){
      this.$router.push(`/press/${id}`)
    },
  },
  computed: {
    test () {
      return this.$store.state.pressInfo
    }
  },
  components: { PressCard }
}

</script>
