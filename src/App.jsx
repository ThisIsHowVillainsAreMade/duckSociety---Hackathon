import { Outlet } from "react-router-dom";
import "./root.css";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Outlet />
    </>
  );
}

export default App;
