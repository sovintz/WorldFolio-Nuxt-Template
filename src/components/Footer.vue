<template>
  <v-footer padless class="mt-md-8">
    <v-card flat tile width="100%" color="#111111" class="lighten-1 text-center">
      <v-card-text>
        <v-btn
          v-for="(socialIcon, index) in $i18n.t('socialIcons')"
          :key="index"
          class="mx-4"
          icon
          @click="contact(socialIcon.url)"
        >
          <v-icon size="24px" class="grey--text darken-2" >
            {{ socialIcon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider style="width: 50%" class="ma-auto grey darken-3"/>
      <v-card-text class="grey--text darken-2">
        {{ $t('footer.copyright') }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    contact(url) {
      window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>

</style>
