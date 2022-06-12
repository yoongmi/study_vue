<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
import Header from './layouts/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  }
}
</script>
