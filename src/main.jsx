import ReactDOM from "react-dom/client";
import App from "./App";
import { PostProvider } from "./context/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostProvider>
    <App />
  </PostProvider>
);
