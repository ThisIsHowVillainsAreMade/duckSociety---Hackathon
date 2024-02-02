import "../components/styles/Header.css";

function Header({ headerId, headerTitle }) {
  return (
    <div id={headerId} className="Header">
      <h1>{headerTitle}</h1>
    </div>
  );
}

export default Header;
