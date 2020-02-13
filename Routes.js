import Home from "./src/container/Home";
import Login from "./src/container/Login";

export default [
  {
    path: "/",
    component: Home,
    loadData: () => Home.loadData,
    key: "home",
    routes: [
      {
        path: "/ttt",
        component: Login,
        key: "home/login"
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    key: "login"
  }
];
