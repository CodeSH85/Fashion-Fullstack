<template>
  <div>
    <h1>JENN LEE</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  mounted() {
    document.body.style.backgroundColor = 'black'
  },
  beforeUnmount () {
    document.body.style.backgroundColor = 'transparent'
  }
}
</script>
