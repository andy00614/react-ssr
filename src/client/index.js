import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "../../Routes";
import { Provider } from "react-redux";
import getStore from "../../store";

const store = getStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));

console.log("同构js");
