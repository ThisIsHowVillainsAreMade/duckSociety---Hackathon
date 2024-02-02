import "./styles/Shop.css";
import Header from "../components/Header";
import Articles from "../../Shop.json"
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";

function Shop() {

  const articles = Articles.articles

  return (
    <div className="Shop">
      <BurgerMenu />
      <Header headerId="shop-header" headerTitle="Mallhalla" />
      <div className="Articles">
        {articles.map((article) => (
          <Link key={article.id} style={{textDecoration: 'none'}}  to={`/mallhalla/${article.id}`}>
          <article className="Article">
            <div className="img-mask">
            <img src={`http://localhost:7777/${article.img}`} alt={article.alt} />
            </div>
            <h2 className="name">{article.alt}</h2>
            <p className="price">{article.price}</p>
          </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Shop;