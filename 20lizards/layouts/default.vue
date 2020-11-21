<template>
  <v-app light>
    <div id="fontSetting">
    <v-app-bar :clipped-left="clipped" fixed app class="grey lighten-1">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-title v-text="home.title" />
      <v-btn icon to="/">
        <v-icon>mdi-home-account</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless width="100%">
      <v-card flat tile class="green darken-1 white--text text-center flex">
        <v-btn color="white" text rounded class="my-2" :to="home.to">
          {{ home.title }}
        </v-btn>

        <v-card-text class="white--text pt-0"> 名古屋大学男子ラクロス部 </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Made by Shunya's Otsubo</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "20Lizards Soul",
      home: {
        title: "HOME",
        to: "/",
      },
      links: ["Home", "Blog", "Contact Us"],
    };
  },
};
</script>

<style scoped>
#fontSetting {
  font-family: "ヒラギノ丸ゴ Pro";
}
</style>