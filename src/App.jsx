import { Outlet } from "react-router-dom";
import "./root.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
