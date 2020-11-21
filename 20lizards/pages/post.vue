<template>
  <div class="post">
    <p v-if="showMessage" style="margin-top: 20px">
      フォームが正常に送信されました。
    </p>
    <v-card class="mx-auto my-12" width="374">
      <v-form ref="form">
        <v-card-title>ブログ投稿</v-card-title>
        <v-col cols="12" md="6">
          <h3>タイトル</h3>
          <v-text-field
            type="text"
            placeholder="Title"
            v-model="title"
            required
          />
          <h3>本文記入欄</h3>
          <v-textarea
            type="message"
            placeholder="本文を記入"
            v-model="message"
            required
          />
        </v-col>
        <v-card-actions class="d-flex justify-center mb-8">
          <v-btn color="warning" @click="postBlog" large width="200">
            投稿する
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import { auth, firestore } from "../plugins/firebase";
export default {
  name: "Signin",
  data: function () {
    return {
      title: "",
      message: "",
      showMessage: false,
    };
  },
  methods: {
    postBlog: function () {
      const colref = firestore.collection("blog");

      // 保存用JSONデータを作成
      const saveData = {
        title: this.title,
        message: this.message,
        slug: this.generateUUID(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };

      // addの引数に保存したいデータを渡す
      colref
        .add(saveData)
        .then(function (docRef) {
          // 正常にデータ保存できた時の処理
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          // エラー発生時の処理
          console.error("Error adding document: ", error);
        });

      this.showMessage = true;
    },
    generateUUID() {
      let d = new Date().getTime();
      let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
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
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
