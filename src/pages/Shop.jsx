import "./styles/Shop.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [articlesData, setArticleData] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesResponse = await fetch("http://localhost:7777/articles");
        const data = await articlesResponse.json();
        setArticleData(data);
        console.info("Articles:", data);
      } catch (error) {
        console.error("Erreur au chargement des articles");
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="Shop">
      <Header headerId="shop-header" headerTitle="Malhalla" />
      <div className="Articles">
        {articlesData.map((article) => (
          <Link key={article.id} style={{textDecoration: 'none'}}  to="#">
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