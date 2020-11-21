<template>
  <div class="signin">
    <v-card class="mx-auto my-12" width="374">
      <v-form ref="form">
        <v-card-title>ログイン認証</v-card-title>
        <div class="text-center">
          <v-col cols="12" md="6">
            <v-text-field
              type="text"
              placeholder="Email"
              v-model="email"
              required
            />
            <v-text-field
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
          </v-col>
        </div>
        <v-card-actions class="d-flex justify-center mb-8">
          <v-btn color="warning" @click="signIn" large width="200">
            LOGIN
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import { auth } from "../plugins/firebase";
export default {
  name: "Signin",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn: function () {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (res) => {
          res.user.getIdToken().then((idToken) => {
            localStorage.setItem("jwt", idToken.toString());
          });
          this.$router.push("/");
        },
        (err) => {
          alert(err.message);
        }
      );
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