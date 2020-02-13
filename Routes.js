import Home from "./src/container/Home";
import Login from "./src/container/Login";

export default [
  {
    path: "/",
    component: Home,
    loadData: (store) => Home.loadData(store),
    key: "home",
    // routes: [
    //   {
    //     path: "/ttt",
    //     component: Login,
    //     key: "home/login"
    //   }
    // ]
  },
  {
    path: "/login",
    component: Login,
    // exact: true,
    key: "login"
  }
];
