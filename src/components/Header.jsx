import "../components/styles/Header.css";
import PropTypes from 'prop-types';

function Header({ headerId, headerTitle }) {
  return (
    <div id={headerId} className="Header">
      <h1>{headerTitle}</h1>
    </div>
  );
}

Header.propTypes = {
  headerId: PropTypes.string,
  headerTitle: PropTypes.any.isRequired,
};
export default Header;
