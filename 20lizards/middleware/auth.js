import { auth } from "../plugins/firebase";

const middleware = ({ route, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (!user && route.name != "signin") redirect("/signin");
  });
};
export default middleware;