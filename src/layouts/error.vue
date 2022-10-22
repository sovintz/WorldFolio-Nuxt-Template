<template>
  <div>
    <v-img src="/images/header.jpg" height="100vh" width="100%" :gradient="$vuetify.breakpoint.smAndDown ? `68deg, ${$vuetify.theme.currentTheme.primary} 20%, transparent`: `68deg, ${$vuetify.theme.currentTheme.primary} 35%, transparent`">
      <v-container fill-height>
        <v-row class="white--text ma-8  ma-md-0" align="center" justify="start">
          <v-col class="white--text" cols="12" md="8" lg="6">
            <!-- Error -->
            <h1 class="text-h4 text-md-h1 d-inline-block">404</h1>
          </v-col>
          <!-- Error Text -->
          <v-col cols="12" class="white--text">
            <h4 class="text-h5 text-md-h4" >{{ errorTitle }}</h4>
          </v-col>
          <!-- Home Button -->
          <v-col>
            <v-btn class="ma-1" color="accent" :x-large="$vuetify.breakpoint.mdAndUp" @click="$router.push('/')">
              Home
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

    </v-img>

  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      errorTitle: "",
      pageNotFound: 'Page Not Found',
      otherError: 'An Error Occurred'
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    this.errorTitle = title
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
