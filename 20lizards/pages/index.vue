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
    <div
      v-if="name == '20lizard_admin@gmail.com'"
      class="d-flex justify-center mb-8"
    >
      <v-btn color="error" rounded class="my-2" :to="home.to" large width="200">
        POST
      </v-btn>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <!-- imageができたら追加 -->
            <!-- <th class="text-left"></th> -->
            <th class="text-left">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in blogs" :key="item.name">
            <!-- imageができたら追加 -->
            <!-- <td>{{ item.title }}</td> -->
            <td>
              <router-link
                class="button is-primary"
                v-bind:to="{ name: 'id', params: { id: item.slug } }"
                >{{ item.title }}</router-link
              >
              <div
              v-if="name == '20lizard_admin@gmail.com'"
              class="my-2 d-flex justify-end"
              >
              <v-btn color="error" rounded class="my-2 d-flex justify-center" :to="home.to" large width="20">
                DELETE
              </v-btn>
            </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { auth, firestore } from "../plugins/firebase";

export default {
  name: "HelloWorld",
  data() {
    return {
      blogs: [],
      name: auth.currentUser.email,
      msg: "名古屋大学男子ラクロス部 20Lizards -REBIRTH-",
      home: {
        title: "HOME",
        to: "/post",
      },
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
    };
  },
  mounted() {
    firestore
      .collection("blog")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        const outputAll = [];
        querySnapshot.forEach((doc) => {
          outputAll.push(doc.data());
        });
        this.blogs = outputAll;
      });
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
