import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import App from "app";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
