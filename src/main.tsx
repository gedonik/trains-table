import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./styles/index.css";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)
