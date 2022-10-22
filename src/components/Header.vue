<template>
  <div>
    <v-img src="/images/header.jpg" height="100vh" width="100%" :gradient="$vuetify.breakpoint.smAndDown ? `68deg, ${$vuetify.theme.currentTheme.primary} 20%, transparent`: `68deg, ${$vuetify.theme.currentTheme.primary} 35%, transparent`">
      <v-container fill-height>
        <v-row class="white--text ma-8  ma-md-0" align="center" justify="start">
          <v-col class="white--text" cols="12" md="8" lg="6">
            <!-- WorldFolio -->
            <h1 class="text-h4 text-md-h1 d-inline-block">{{ $t('homePage.pageTitle') }}</h1>
          </v-col>
          <!-- Header Text -->
          <v-col cols="12" class="white--text">
              <h4 class="text-h5 text-md-h4" >{{ $t('homePage.header.title') }}</h4>
          </v-col>
          <!-- Header Button -->
          <v-col>
            <v-btn class="ma-1" color="accent" :x-large="$vuetify.breakpoint.mdAndUp" @click="$vuetify.goTo('#contact', {duration:3000})">
              {{ $t('homePage.header.buttonContact') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

    </v-img>

  </div>

</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log("this.$vuetify.theme.themes.light.primary")
    console.log(this.$vuetify.theme.currentTheme.primary)
  }
}
</script>

<style scoped>
</style>
