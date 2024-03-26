import "./App.css";
import "./Cart.css";
import "./BookMarkItem.css";
import "./Login.css";
import Items from "./compomets/Items";
import Appbar from "./compomets/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { LOAD_DATA } from "./Redux/actions";
import Landing from "./compomets/Landing";

function App() {
  const dispatch = useDispatch();
  dispatch({
    type: LOAD_DATA,
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Appbar />
                <Landing /> <Items />
              </>
            }
          />
          <Route
            path="/cart/"
            element={
              <>
                <Appbar /> <Cart />
              </>
            }
          />
          <Route
            path="/login/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register/"
            element={
              <>
                <Register />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
