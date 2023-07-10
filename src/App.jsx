import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "success" }),
    element: <Home />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
