<template>
  <div class="article">
    <h1 class="text-center" style="font-family: 'ヒラギノ丸ゴ Pro'">
      {{ title }}
    </h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { auth, firestore } from "../plugins/firebase";

export default {
  name: "article",
  data() {
    return {
      title: "",
      message: "",
    };
  },
  beforeRouteEnter (to, from, next) {
      firestore.collection('blog').where('slug', '==', to.params.id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.title = doc.data().title
            vm.message = doc.data().message
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        firestore.collection('blog').where('slug', '==', this.$route.params.id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.title = doc.data().title
            this.message = doc.data().message
          })
        })
      }
    }
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