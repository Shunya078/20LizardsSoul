<template>
  <div class="hello">
    <template>
      <v-carousel cycle height="300" show-arrows-on-hover>
        <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </template>
    <div style="margin-top: 20px"></div>
    <h2 class="text-center" style="font-family: 'ヒラギノ丸ゴ Pro'">
      {{ msg }}
    </h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in blogs" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { auth } from "../plugins/firebase";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "名古屋大学男子ラクロス部 20Lizards",
      images: [
        {
          src:
            "https://user-images.githubusercontent.com/50067752/99872103-c88b1380-2c22-11eb-810d-ff4ddcfa0d70.jpg",
        },
        {
          src:
            "https://user-images.githubusercontent.com/50067752/99872106-cd4fc780-2c22-11eb-8da1-a4b611ac505e.jpg",
        },
        {
          src:
            "https://user-images.githubusercontent.com/50067752/99872107-d0e34e80-2c22-11eb-9299-ee4e9abf08e8.jpg",
        },
        {
          src:
            "https://user-images.githubusercontent.com/50067752/99872108-d2147b80-2c22-11eb-85f8-b9d296fbeb53.jpg",
        },
        {
          src:
            "https://user-images.githubusercontent.com/50067752/99872109-d2ad1200-2c22-11eb-888e-32c290bc0fc3.jpg",
        },
      ],
      blogs: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  methods: {
    signOut: function () {
      auth.signOut().then(() => {
        localStorage.removeItem("jwt");
        this.$router.push("/signin");
      });
    },
    apiPublic: async function () {
      let res = await axios.get("http://localhost:8000/public");
      this.msg = res.data;
    },
    apiPrivate: async function () {
      let res = await axios.get("http://localhost:8000/private");
      this.msg = res.data;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-family: "ヒラギノ丸ゴ Pro";
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
