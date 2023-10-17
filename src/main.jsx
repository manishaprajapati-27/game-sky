import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Redux Setup
import { legacy_createStore as createStore } from "redux";
import rootReducers from "./reducers/index.jsx";
import { Provider } from "react-redux";

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
