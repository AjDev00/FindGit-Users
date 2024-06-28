import Nav from "./components/Nav";
import Search from "./components/Search";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  function changeTheme(e) {
    e.preventDefault();
    setClick(!click);
  }

  return (
    <div className={click ? "container" : "nocontainer"}>
      <Nav changeTheme={changeTheme} />
      <Search />
    </div>
  );
}

export default App;
